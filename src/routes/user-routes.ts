import express  from "express";
import { createUserHandler, forgotPasswordHandler, resetPasswordHandler, verifyUserHandler } from "../controller/user.controller";
import validateResourse from "../middleware/validateResourse";

import { createUserSchema, forgotPasswordSchema, resetPasswordSchema, verifyUserSchema } from "../schema/user.schema";

const router = express.Router()


router.post('/api/users',
validateResourse(createUserSchema ),
createUserHandler
)
router.post("/api/users/verify/:id/:verificationCode",
    validateResourse(verifyUserSchema),
    verifyUserHandler
  );
  router.post("/api/users/forgotpassword",
    validateResourse(forgotPasswordSchema),
    forgotPasswordHandler
  );
  router.post("/api/users/resetpassword/:id/:passwordResetCode",
    validateResourse(resetPasswordSchema),
    resetPasswordHandler
  );

export default router;