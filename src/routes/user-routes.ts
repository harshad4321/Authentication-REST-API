import express  from "express";
import { createUserHandler, forgotPasswordHandler, getCurrentUserHandler, resetPasswordHandler, verifyUserHandler } from "../controller/user.controller";
import requireUser from "../middleware/requireUser";
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
  router.get("/api/users/me",requireUser, getCurrentUserHandler);
export default router;

