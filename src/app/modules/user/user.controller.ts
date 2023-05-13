import { NextFunction, Request, Response } from "express";
import { createUserToBD } from "./user.services";
import { IUser } from "./user.interfaces";
import { IResponse } from "../../utils/interfaces";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await createUserToBD(req.body);
    const response: IResponse<IUser> = {
      status: "success",
      message: `User ${user.name.firstName} ${user.name.lastName} created successfully`,
      data: user,
    };
    res.status(200).json(response);
  } catch (error) {
    const response: IResponse<string> = {
      status: "fail",
      message: "failed to create user",
      data: error.message,
    };
    res.status(400).json(response);
    next(error);
  }
};
