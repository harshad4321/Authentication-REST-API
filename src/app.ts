require('dotenv').config()
import  express from "express"
import  config  from "config"
import connectToDB from "./utils/connect-to-DB"
import log from "./utils/logger"
import router from "./routes/intex"
import { deserialize } from "v8"
import deserializeUser from "./middleware/deserializeUser"

const app = express()

app.use(express.json());

app.use(deserializeUser)

app.use(router);


const PORT = config.get('PORT')

app.listen(PORT,()=>{
// console.log(`App started at http://localhost:${PORT}`);
log.info(`App started at http://localhost:${PORT}`)
connectToDB()  

})
