import { IUser, IUserMethods } from "./user.interfaces";
import User from "./user.model";

export const createUserToBD = async (
  payload: IUser
): Promise<IUser & IUserMethods> => {
  const user = new User(payload);
  const result = user.save();

  //getFullName is now available after adding instance method to our userSchema
  // console.log(user.getFullName());

  return result;
};

export const getFemaleUsersFromDB = async (): Promise<
  (IUser & IUserMethods)[]
> => {
  // getAllFemaleUsers static method is available after adding it to the useSchema
  const femaleUsers = await User.getAllFemaleUsers();
  return femaleUsers;
};
