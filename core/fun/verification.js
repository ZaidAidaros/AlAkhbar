
async function sendMaile(msg){
  var nodemailer = require("nodemailer");
  var smtpTransport = nodemailer.createTransport({
      service: process.env.MAILERNAME,
      auth: {
          user: process.env.MAILERID,
          pass: process.env.MAILERPASS
      }
  });

  smtpTransport.sendMail(
    {
      from: process.env.MAILERID,
      to : msg.destenation,
      subject : msg.subject,
      html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+msg.verifyUrl+">Click here to verify</a>" 
  
    }, 
    function(error, response){
    if(error){
        return {state:false,msg:"Error:"+error};
    }else{
      return {state: true};
    }
  });

}


function sendVerificationOnEmail(req, res, email, emailTokenUrl) {
  // empliment sending email with token url
  const emailMsg = {
    subject:"Al-Akhbar Web App Email Verifiction",
    destenation:email,
    verifyUrl:emailTokenUrl
  };
  sendMaile(emailMsg).then(()=>{
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
    status: "success",
    isVerified: false,
    emailMsg, //will delete it later
    message: "We Sent You An SMS With Verify URL",
  });
}

module.exports = {
  sendVerificationOnEmail,
  sendVerificationOnPhone,
};
