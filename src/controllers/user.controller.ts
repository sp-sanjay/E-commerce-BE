import { NextFunction, Request, Response } from "express";
import { ErrorHandler, sendError } from "../utils/errorHandler.js";
import { UserRequest } from "../types/user.types.js";

const createUser = async (req: Request<{},{},UserRequest>, res: Response, next: NextFunction) => {
  try {
    const {name, email, _id, avatar, password, dob, gender} = req.body;
    if([name, email, _id, password, dob, gender].some((field) => {
      field  === ""
    })) {
    sendError(next, "All fields are required");
    }
    console.log(req.body,name)
    // sendError(next, 'error.message');
  } catch (error: any) {
    sendError(next, error.message, error.statusCode);
  }
};

export { createUser };
