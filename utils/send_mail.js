import nodemailer from "nodemailer";
import 'dotenv/config'




const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});



const send_mail = async (tomail, jobid) => {
    if (!tomail || !jobid) {
        return new Error("sender mail and jobid are required")
    }
    try {
const info = await transporter.sendMail({
    from: '"I Am Javascript" <otpverify1979@gmail.com>',
    to: tomail,
    subject: "Hello ✔ Testing",
    text: `Hello world! I am Learning queue systeam and worker using bullmq , jobId: ${jobid}`, // plain‑text body
    html: `<b>Hello world! Hello world! I am Learning queue systeam and worker using bullmq</b> <br> <b>jobId: ${jobid}</b>`, // HTML body
  });
} catch (err) {

  console.log("Unable to send mail : ", err);

}
}


export default send_mail;