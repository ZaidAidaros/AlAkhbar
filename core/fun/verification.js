
async function sendMaile(msg){
  var nodemailer = require("nodemailer");
  var smtpTransport = nodemailer.createTransport({
      service: process.env.MAILERNAME,
      auth: {
          user: process.env.MAILERID,
          pass: process.env.MAILERPASS
      }
  });

  const res = smtpTransport.sendMail(
    msg, 
    function(error, response){
    if(error){
        return {state:false, msg:"Error:"+error};
    }else{
      return {state: true, msg: response};
    }
  });
return res;
}


function sendVerificationOnEmail(req, res, email, emailTokenUrl) {
  // empliment sending email with token url
  const emailMsg = {
      from: process.env.MAILERID,
      to : email,
      subject : "Al-Akhbar Web App Email Verifiction",
      html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+ emailTokenUrl +">Click here to verify</a>" 
  };
  sendMaile(emailMsg).then((res)=>{
    console.log(res);
    return res.status(200).json({
      state: true,
      isVerified: false,
      message: "We Sent You An Email With Verify URL",
    });
  }).catch((err)=>{
    console.error(err)
    return res.status(500).json({
      state: true,
      isVerified: false,
      message:"Uknown Error..."
    });
  });
}

function sendVerificationOnPhone(req, res, phone, phoneTokenUrl) {
  // empliment sending sms to phone with token url
  const emailMsg = `To Confirm your email click here: ${token} `;
  return res.status(200).json({
    state: true,
    isVerified: false,
    emailMsg, //will delete it later
    message: "We Sent You An SMS With Verify URL",
  });
}

module.exports = {
  sendVerificationOnEmail,
  sendVerificationOnPhone,
};
