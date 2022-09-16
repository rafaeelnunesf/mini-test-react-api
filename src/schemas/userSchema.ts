import Joi from "joi";
import { UserCredentials } from "../repositories/authRepository.js";

export const UserCredentialsSchema = Joi.object<UserCredentials>({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
