import nodemailer from "nodemailer"


 async function createTestCreds(){
    const creds =  await nodemailer.createTestAccount();
    console.log({creds})
}
createTestCreds()
  
  async function sendEmail(){ }
  
  export default sendEmail;