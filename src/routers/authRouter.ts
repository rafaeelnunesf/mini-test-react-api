import { Router } from "express";
import authController from "../controllers/authController.js";
import { UserCredentialsSchema } from "../schemas/userSchema.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";

const authRouter = Router();

authRouter.post(
  "/sign-up",
  validateSchemaMiddleware(UserCredentialsSchema),
  authController.signUp
);

export default authRouter;
