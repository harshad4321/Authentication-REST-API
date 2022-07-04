import mongoose from "mongoose";
import  config  from "config";
import log from "./logger";


async function  connectToDB () {
    const dbUri = config.get<string>('dbUri')
      try{
   await mongoose.connect(dbUri);
   log.info('connected to DB...')
      }catch(e){
process.exit(1);
      }
}
export  default connectToDB;