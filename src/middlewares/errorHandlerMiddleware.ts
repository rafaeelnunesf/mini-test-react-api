import { NextFunction, Request, Response } from "express";
import { AppError, isAppError } from "../utils/errorUtils.js";
import httpStatus from "http-status";

export function errorHandlerMiddleware(
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err);

  if (isAppError(err)) {
    if (err.type === "bad_request") {
      return res.status(httpStatus.BAD_REQUEST).send({
        message: err.message,
      });
    }

    if (err.type === "conflict") {
      return res.status(httpStatus.CONFLICT).send({
        message: err.message,
      });
    }

    if (err.type === "unauthorized") {
      return res.status(httpStatus.UNAUTHORIZED).send({
        message: err.message,
      });
    }

    if (err.type === "not_found") {
      return res.status(httpStatus.NOT_FOUND).send({
        message: err.message,
      });
    }
    if (err.type === "wrong_schema") {
      return res.status(httpStatus.UNPROCESSABLE_ENTITY).send({
        message: err.message,
      });
    }

    /* eslint-disable-next-line no-console */
    console.error(err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      error: "InternalServerError",
      message: "Internal Server Error",
    });
  }

  return res.sendStatus(500);
}
