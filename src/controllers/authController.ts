import { Request, Response } from "express";
import httpStatus from "http-status";

import { UserCredentials } from "../repositories/authRepository.js";
import authService from "../services/authService.js";

async function signUp(req: Request, res: Response) {
  const user: UserCredentials = req.body;

  await authService.signUp(user);
  res.sendStatus(httpStatus.CREATED);
}

export default {
  signUp,
};
