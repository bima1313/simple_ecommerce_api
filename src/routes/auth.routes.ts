import { Router } from "express";
import { validate } from "../middlewares/validate.middlewares.js";
import { LoginSchema } from "../shema/loginSchema.js";
import {
  loginController,
  registerController,
} from "../controllers/auth.controllers.js";
import { RegisterSchema } from "../shema/registerSchema.js";

export const AuthRouter: Router = Router();

AuthRouter.post("/login", validate(LoginSchema), loginController);

AuthRouter.post("/register", validate(RegisterSchema), registerController);