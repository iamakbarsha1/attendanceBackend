const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "5f6a796b828bc4b8543711ab692bd931-02fa25a3-c095dc91",
    domain: "sandbox976a891cbb904c51a073d4475701592b.mailgun.org",
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendEmail = (name, email, msg, phone, callBack) => {
  const mailOptions = {
    from: email,
    to: "iamakbarsha1@gmail.com",
    subject: "Portfolio Form",
    text: `I'm ${name}, I came across your portfolio on internet.
${msg}
Regards,
${name}
${phone}`,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      // console.log("Error while sending email");
      callBack(err, null);
    } else {
      // console.log("Email sent !");
      callBack(null, data);
    }
  });
};

module.exports = sendEmail;
