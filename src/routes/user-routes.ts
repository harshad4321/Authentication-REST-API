import express  from "express";
import { createUserHandler, verifyUserHandler } from "../controller/user.controller";
import validateResourse from "../middleware/validateResourse";

import { createUserSchema, verifyUserSchema } from "../schema/user.schema";

const router = express.Router()


router.post('/api/users',
validateResourse(createUserSchema ),
createUserHandler
)
router.post(
    "/api/users/verify/:id/:verificationCode",
    validateResourse(verifyUserSchema),
    verifyUserHandler
  );
export default router;