import { prop } from "@typegoose/typegoose";
import { nanoid } from "nanoid";



export class User{
 @prop({lowercase:true,required:true,unique:true})
 email:string;


 @prop({required:true})
 firstName:string

  @prop({required:true})
  lastName:string

  @prop({required:true})
  password:string
    
  @prop({required:true,default:()=>nanoid()})
  verificationCord:string
    
  @prop()
  passwordReset:string

    
  @prop({required:true})
  verified:boolean
}