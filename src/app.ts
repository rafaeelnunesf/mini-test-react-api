import "./setup.js";
import cors from "cors";
import express from "express";
import "express-async-errors";
import authRouter from "./routers/authRouter.js";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);
app.use(errorHandlerMiddleware);
export default app;
