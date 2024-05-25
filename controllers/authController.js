const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Sequelize } = require("sequelize");
const { User, UserPermission, Writter } = require("../models");
const {createUserOnFirebase,checkFireToken} = require("../core/firebase_admin/auth");

const signUp = async (req, res) => {
  try {
    const {userName, email, phone, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const u = {
      UName:userName,
      UPassword: hashedPassword,
      userPermissionId: 3,
    };
    if(email){
      u.email = email;
    }
    if(phone){
      u.phone = phone;
    }
    const user = await User.create(u);
    if(user){
      const {state,result} = await createUserOnFirebase(req.body.email,req.body.phone,req.body.password);
      if(state){
        user.uid=result.uid;
        await user.save();
      }
      res.status(200).json({
        state: true,
        message: "Signed Up Successfuly..."
      });
    }else{
      res.status(400).json({ state: false, message: "Could Not Sign Up" });
    }
  } catch (error) {
    if (error instanceof Sequelize.UniqueConstraintError) {
      res.status(409).json({ state: false, message: "Already exists." });
    } else {
      res.status(500).json({ state: false, message: error.message });
    }
  }
};

const getUserToken = (user)=>{
  const tokUser = {
    Id: user.Id,
    name: user.UName,
    email: user.email,
    phone: user.phone,
    permission: user.userPermission.permission,
    writterId: user.writter ? user.writter.Id : null,
    isWritterStoped: user.writter ? user.writter.isStoped : false,
  };
  const secret = process.env.JWT_SECRET;
  const token = jwt.sign(tokUser, secret, { expiresIn: "24h" });
  delete tokUser.writterId;
  if (tokUser.email) {
    delete tokUser.phone;
  } else {
    delete tokUser.email;
  }
  return {resUser:tokUser,token};
}
const logIn = async (req, res) => {
  const { phoneEmail, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        [Sequelize.Op.or]: [{ email: phoneEmail }, { phone: phoneEmail }],
      },
      include: [UserPermission, Writter],
    });
    if (!user) {
      return res
        .status(400)
        .json({ state: false, message: "This User Not Exist." });
    }
    const validPassword = await bcrypt.compare(password, user.UPassword);
    if (!validPassword) {
      return res
        .status(400)
        .json({ state: false, message: `wrong password for ${phoneEmail}` });
    }
    if (user.isStoped) {
      return res.status(400).json({
        state: false,
        message:
          user.notification ?? "Can Not Log In :you are stoped currnetly",
      });
    }
    
    if ((user.isEmailVerified && user.email === phoneEmail) || (user.isPhoneVerified && user.phone === phoneEmail)) {
      const {resUser,token} = getUserToken(user);
      return res.status(200).json({
        state: true,
        isVerified: true,
        message: "Loged In Successfuly \n Wait Will Redirect You To Home",
        user: resUser,
        token,
      });
    } else {
      if(!user.uid){
        const {state,result} = await createUserOnFirebase(user.email,user.phone,password);
        if(state){
          user.uid=result.uid;
          await user.save();
        }else{
          console.log(result);
          return res.status(400).json({
            state: false,
            message:result.message,
          });
        }
      }
      if (user.phone === phoneEmail) {
        return res.status(200).json({
            state: true,
            isVerified:false,
            message:"We Sent You SMS Code",
        });
      } else {
        return res.status(200).json({
          state: true,
          isVerified:false,
          message:"We Sent You An Email With Verify URL",
      });
      }
      
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      state: false,
      error: "Internal Server Error",
    });
  }
};

// Other controller functions (e.g. logoutUser, resetPassword, changePassword)...


const verifyEmailPhone = async (req, res) => {
  const token = req.query.token;
  if (!token) {
    return res.status(401).json({ state: false, message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { phoneEmail } = decoded;
    const user = await User.findOne({
      where: {
        [Sequelize.Op.or]: [{ email: phoneEmail }, { phone: phoneEmail }],
      },
    });
    if (user) {
      if (user.phone === phoneEmail) {
        await User.update(
          { isPhoneVerified: true },
          {
            where: { Id: user.Id },
          }
        );
        return res
          .status(200)
          .json({ state: true, message: "Phone Verified Successfuly" });
      } else {
        await User.update(
          { isEmailVerified: true },
          {
            where: { Id: user.Id },
          }
        );
        return res.status(200).json({
          state: true,
          message: "Email Verified Successfuly",
        });
      }
    } else {
      res.status(400).json({ state: false, message: "Invalid token." });
    }
  } catch (error) {
    res.status(500).json({ state: false, message: error.message });
  }
};

const verifyEmailPhoneByFirebase = async (req, res) => {
  const {token, phoneEmail} = req.query;
  if (!token) {
    return res.status(401).json({ state: false, message: "No token provided" });
  }

  try {
    const {state, result} = await checkFireToken(token);
    if(state){
      const fireUser = result;
      const user = await User.findOne({
        where: { uid:fireUser.uid },
      });
      if (user) {
        if (user.phone === phoneEmail) {
          user.isPhoneVerified = true;
          await user.save();
          return res
            .status(200)
            .json({ state: true, message: "Phone Verified Successfuly" });
        } else {
          user.isEmailVerified = true;
          await user.save();
          return res.status(200).json({
            state: true,
            message: "Email Verified Successfuly",
          });
        }
      } else {
        res.status(400).json({ state: false, message: "Invalid token." });
      }
    }else{
      res.status(400).json({ state: false, message: "Unknown Error" });
    }
  } catch (error) {
    res.status(500).json({ state: false, message: error.message });
  }
};


const resetPasswordByFirebase = async (req, res) => {
  const { token, newPassword, phoneEmail } = req.body;
  if (!token) {
    return res.status(401).json({ state: false, message: "No token provided" });
  }
  try {
    const {state, result} = await checkFireToken(token);
    if(state){
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      let user = {UPassword: hashedPassword};
      if(result.email === phoneEmail){
        user.isEmailVerified=true;
      }
      if(result.phoneNumber === phoneEmail){
        user.isPhoneVerified=true;
      }
      await User.update(user,{ where: { uid:result.uid } });
      return res
        .status(200)
        .json({ state: true, message: "Password Updated Successfuly" });
    }else{
      res.status(400).json({ state: false, message: result.message });
    }
  } catch (error) {
    res.status(500).json({ state: false, message: error.message });
  }  
};

const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    const user = await User.findOne({ where: { Id: req.user.Id } });
    if (!user) {
      return res.status(400).json({ state: false, message: "User not found" });
    }

    const validPassword = await bcrypt.compare(oldPassword, user.UPassword);
    if (!validPassword) {
      return res
        .status(400)
        .json({ state: false, message: "Password is incorrect" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await user.update({ password: hashedPassword });

    res.json({ state: true, message: "Password updated successfully" });
  } catch (error) {
    return res.status(500).json({ state: false, message: error.message });
  }
};

const foregetpassword = async (req, res) => {
  const { phoneEmail } = req.body;
  try {
    const user = await User.findOne({
      where: {
        [Sequelize.Op.or]: [{ email: phoneEmail }, { phone: phoneEmail }],
      },
      attributes: ["email", "phone"],
    });

    if (!user) {
      return res.status(400).json({ state: false, message: "not exist" });
    }
    // const secret = process.env.JWT_SECRET;
    // if (user.phone === phoneEmail) {
    //   const phoneToken =
    //     "To Reset Your Password Click This URL " +
    //     process.env.APP_DOMAIN +
    //     "/resetpassword?token=" +
    //     jwt.sign({ phoneEmail: user.phone }, secret, {
    //       expiresIn: "1h",
    //     });
    //   sendVerificationOnPhone(req, res, user.phone, phoneToken);
    // } else {
    //   const emailToken =
    //     "To Reset Your Password Click This URL " +
    //     process.env.APP_DOMAIN +
    //     "/resetpassword?token=" +
    //     jwt.sign({ phoneEmail: user.email }, secret, {
    //       expiresIn: "1h",
    //     });
    //   sendVerificationOnEmail(req, res, user.email, emailToken);
    // }
    return res.status(200).json({ state: true, message: ""});
  } catch (error) {
    res.status(400).json({ state: false, message: error.message });
  }
};

const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;
  if (!token) {
    return res.status(401).json({ state: false, message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { phoneEmail } = decoded;

    if (phoneEmail) {
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await User.update(
        { UPassword: hashedPassword },
        {
          where: {
            [Sequelize.Op.or]: [{ email: phoneEmail }, { phone: phoneEmail }],
          },
        }
      );

      return res
        .status(200)
        .json({ state: true, message: "Password Updated Successfuly" });
    }
  } catch (error) {
    res.status(500).json({ state: false, message: error.message });
  }
};


module.exports = {
  logIn,
  signUp,
  changePassword,
  resetPassword,
  foregetpassword,
  verifyEmailPhone,
  verifyEmailPhoneByFirebase,
  resetPasswordByFirebase,
};
