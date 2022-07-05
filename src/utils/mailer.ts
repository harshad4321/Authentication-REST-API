import nodemailer from "nodemailer"
import config from "config";

//  async function createTestCreds(){
//     const creds =  await nodemailer.createTestAccount();
//     console.log({creds})
// }
// createTestCreds()
  
const smtp = config.get<{
  user: string;
  pass: string;
  host: string;
  port: number;
  secure: boolean;
}>("smtp");

  async function sendEmail(){ }
  
  export default sendEmail;