import { Schema, model } from "mongoose";
import { IUser } from "./user.interfaces";

const userSchema = new Schema<IUser>(
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

const User = model<IUser>("user", userSchema);

export default User;
