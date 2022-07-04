import express  from "express";
import { createUserHandler } from "../controller/user.controller";
import validateResourse from "../middleware/validateResourse";

import { createUserSchema } from "../schema/user.schema";

const router = express.Router()


router.post('/api/users',
validateResourse(createUserSchema ),
createUserHandler
)

export default router;