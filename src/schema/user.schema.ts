import{object,string,TypeOf} from "zod"; 

export const createUserSchema = object({
body:object({
   firstName:string({
        required_error:"First name is required"
    }),
   lastName:string({
        required_error:"last name is required"
    }),
   password:string({
        required_error:"password is required",
    }).min(6,"password required atleast 6 chars"),
     passwordConfirmation:string({
     required_error:"Password Confirmation is rquired",
    }),
  email:string({
     required_error:"email is required",
  }).email("Not a valid email"),
}).refine((data) => data.password === data.passwordConfirmation,{
    message:"passwords do  not match ",
    path:['passwordConfirmation'],
}),
})
export type CreateUserInput = TypeOf<typeof createUserSchema>["body"]