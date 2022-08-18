const nodeMailer = require("nodemailer");

const transporter = nodeMailer.createTransport({
  host: "smtp.zoho.eu",
  port: 465,
  secure: true,
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
});

const sendMail = async (user) => {
  const ejs = require("ejs");
  ejs.renderFile(
    __dirname + "/views/email.ejs",
    { token: user.token, name: user.username },
    async (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const mail = {
          from: process.env.user,
          to: user.email,
          subject: "Verify email",
          html: data,
        };
        await transporter.sendMail(mail, (err, info) => {
          if (err) {
            console.log("i am error", err);
          } else console.log(info);
        });
      }
    }
  );
};

module.exports = {
  sendMail,
};
