import { IUser } from "./user.interfaces";
import User from "./user.model";

export const createUserToBD = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
  const result = user.save();
  return result;
};
