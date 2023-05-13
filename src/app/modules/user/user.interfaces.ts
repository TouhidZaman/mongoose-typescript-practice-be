import { Model } from "mongoose";

export interface IUser {
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  email?: string;
  avatar?: string;
}

export interface IUserMethods {
  getFullName: () => string;
}

// If we only use instance methods
// export type UserModel = Model<IUser, {}, IUserMethods>;

// to use both statics and methods
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAllFemaleUsers: () => Promise<(IUser & IUserMethods)[]>;
}
