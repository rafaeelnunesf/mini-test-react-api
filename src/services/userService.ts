import { conflictError } from "../utils/errorUtils.js";
import authRepository, {
  UserCredentials,
} from "./../repositories/authRepository.js";
import bcrypt from "bcrypt";

async function signUp(userCredentials: UserCredentials) {
  const existingUser = await authRepository.findByEmail(userCredentials.email);

  if (existingUser) throw conflictError("Email must be unique");

  const saltRound = 12;
  const hashedPassword = bcrypt.hashSync(userCredentials.password, saltRound);

  await authRepository.create({ ...userCredentials, password: hashedPassword });
}
