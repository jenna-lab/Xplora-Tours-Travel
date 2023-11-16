import { Router } from "express";
import {
  loginUser,
  registerUser,
  checkUser,
  getallusers,
} from "../controllers/userController";
import { VerifyToken } from "../MiddleWare/verifytoken";

const userRouter = Router();
userRouter.post("/login", loginUser);
userRouter.post("/signup", registerUser);
userRouter.get("/users", getallusers);

userRouter.get("/check", VerifyToken, checkUser);

export default userRouter;
