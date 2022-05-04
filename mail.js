const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
<<<<<<< HEAD
    api_key: "5f6a796b828bc4b8543711ab692bd931-02fa25a3-c095dc91",
    domain: "sandbox976a891cbb904c51a073d4475701592b.mailgun.org",
=======
    api_key: "5f6a796b828bc4b8543711ab692bd931-02fa25a3-c095dc91", // use the private api key from mailgun
    domain: "sandbox976a891cbb904c51a073d4475701592b.mailgun.org", // use the domain from mailgun
>>>>>>> 64a4699a5d989d1ce048586080d13406d73b0a9e
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendEmail = (name, email, msg, phone, callBack) => {
  const mailOptions = {
<<<<<<< HEAD
    from: email,
    to: "iamakbarsha1@gmail.com",
    subject: "Portfolio Form",
    text: `I'm ${name}, I came across your portfolio on internet.
${msg}
Regards,
${name}
${phone}`,
=======
    from: email, // sender email
    to: "iamakbarsha1@gmail.com", // this is the receiver email id
    subject: "Hello!, A mail fromMailGun via node.js & nodemailer",
    text: `Hello!, I'm ${name}, ${msg}`,
>>>>>>> 64a4699a5d989d1ce048586080d13406d73b0a9e
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
