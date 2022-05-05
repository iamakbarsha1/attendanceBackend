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
    //     from: email,
    //     to: "iamakbarsha1@gmail.com",
    //     subject: "Portfolio Form",
    //     text: `I'm ${name}, I came across your portfolio on internet.
    // ${msg}
    // Regards,
    // ${name}
    // ${phone}`,
    from: email, // sender email
    to: "iamakbarsha1@gmail.com", // this is the receiver email id
    // cc: ["iamakbarsha1@gmail.com", "akbar.430happy@gmail.com"],
    // cc: [`iamakbarsha1@gmail.com, ${email}`],
    subject: "attendance(Frontend & backend)",
    text: `Dear Akbar Sha S, 

I'm ${name},
 
My message is:  ${msg}

Regards,
${name},
${email}

mail via node.js & nodemailer(mailgun) from attendance(Frontend & backend)`,
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
