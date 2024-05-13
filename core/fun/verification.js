
async function sendMaile(msg){
  var nodemailer = require("nodemailer");
  var smtpTransport = nodemailer.createTransport("SMTP",{
      service: process.env.MAILERNAME,
      auth: {
          user: process.env.MAILERID,
          pass: process.env.MAILERPASS
      }
  });

  smtpTransport.sendMail(
    {
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
  try {
    sendMaile(emailMsg);
  } catch (error) {
    console.log(error)
  }
  return res.status(200).json({
    status: "success",
    isVerified: false,
    message: "We Sent You An Email With Verify URL",
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
