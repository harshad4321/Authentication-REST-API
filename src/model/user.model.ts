import { 
      getModelForClass,
      modelOptions,
      pre,
      prop, 
      Severity } from "@typegoose/typegoose";
import { argon2 } from "argon2";
import { nanoid } from "nanoid";

@pre<User>("save",async function () {
    if(!this.isModified('password')){
        return;
    }
const hash = await argon2.hash(this.password)
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

  async validatePassword(this: DocumentType<User>,candidatePassword:string){
    try{

    }catch(e){
    log.error(e,"Codnot validate Password");
    
    }
  }
 
}
const UserModel = getModelForClass(User)
export  default UserModel   