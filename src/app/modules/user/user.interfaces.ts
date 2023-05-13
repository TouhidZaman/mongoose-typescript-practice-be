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

export type UserModel = Model<IUser, {}, IUserMethods>;
