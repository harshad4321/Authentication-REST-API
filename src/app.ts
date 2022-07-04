require('dotenv').config()
import  Express from "express"
import  config  from "config"
import connectToDB from "./utils/connect-to-DB"

const app = Express()

const PORT = config.get('PORT')

app.listen(PORT,()=>{
console.log(`App started at http://localhost:${PORT}`);

connectToDB()  

})
