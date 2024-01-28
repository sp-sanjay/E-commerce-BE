import { NextFunction, Request, Response } from "express";
import {ErrorHandler} from "../utils/errorHandler.js";

export const errorHandler = (
  err: ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
    err.statusCode = err.statusCode || 500
  return res.status(err.statusCode).json({
    success: false,
    message: err.message || "Something went wrong",
    statusCode: err.statusCode,
  });
};
