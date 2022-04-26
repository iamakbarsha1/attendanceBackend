const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "5f6a796b828bc4b8543711ab692bd931-02fa25a3-c095dc91", // use the private api key from mailgun
    domain: "sandbox976a891cbb904c51a073d4475701592b.mailgun.org", // use the domain from mailgun
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendEmail = (name, email, msg, callBack) => {
  const mailOptions = {
    from: email, // sender email
    to: "iamakbarsha1@gmail.com", // this is the receiver email id
    subject: "Hello!, A mail fromMailGun via node.js & nodemailer",
    text: `Hello!, I'm ${name}, ${msg}`,
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
