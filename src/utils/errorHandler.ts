import { NextFunction } from "express";

class ErrorHandler extends Error {
  constructor(public message: string, public statusCode?: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

const sendError = (next: NextFunction, message: string, statusCode?: number) => {
  return next(new ErrorHandler(message, statusCode));
};
export { ErrorHandler, sendError };
