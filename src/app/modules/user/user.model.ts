import { Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interfaces";

const userSchema = new Schema<IUser, UserModel, IUserMethods>(
  {
    name: {
      firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15,
      },
      lastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15,
      },
    },
    gender: {
      type: String,
      enum: {
        values: ["male", "female"],
        message: "invalid gender {VALUE}!. male/female are allowed",
      },
      required: [true, "Gender is required"],
    },
    email: {
      type: String,
      minlength: 10,
    },
    avatar: String,
  },
  {
    timestamps: true,
  }
);

//Adding instance Methods
userSchema.method("getFullName", function getFullName() {
  return `${this.name.firstName} ${this.name.lastName}`;
});

const User = model<IUser, UserModel>("user", userSchema);

export default User;
