const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "",
    domain: "",
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendEmail = (name, email, msg, callBack) => {
  const mailOptions = {
    from: email,
    to: "iamakbarsha1@gmail.com",
    subject: "Hello!, A mail fromMailGun via node.js & nodemailer",
    text: msg,
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
