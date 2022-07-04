import { 
      getModelForClass,
      modelOptions,
      pre,
      prop, 
      Severity } from "@typegoose/typegoose";
import { argon2d } from "argon2";
import { nanoid } from "nanoid";
import log from "../utils/logger";

@pre<User>("save",async function () {
    if(!this.isModified('password')){
        return;
    }
const hash = await argon2d.hash(this.password);

this.password = hash;


})
@modelOptions({
   schemaOptions:{
   timestamps:true
    },
    options:{
        allowMixed:Severity.ALLOW
    }
})
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
  passwordReset:string | null;

    
  @prop({required:true})
  verified:boolean; 

  async validatePassword(this:DocumentType<User>,candidatePassword:string){
    try{
return await argon2d.verify(this.password,candidatePassword)
    }catch(e){
    log.error(e,"Could not validate Password");
    return  false
    }
  }
 
}
const UserModel = getModelForClass(User)
export  default UserModel   