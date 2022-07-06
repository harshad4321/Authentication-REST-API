require('dotenv').config()
import  express from "express"
import  config  from "config"
import connectToDB from "./utils/connect-to-DB"
import log from "./utils/logger"
import router from "./routes/intex"

const app = express()

app.use(express.json());
 
app.use(router);


const PORT = config.get('PORT')

app.listen(PORT,()=>{
// console.log(`App started at http://localhost:${PORT}`);
log.info(`App started at http://localhost:${PORT}`)
connectToDB()  

})
