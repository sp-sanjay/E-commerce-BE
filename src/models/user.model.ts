import mongoose from "mongoose";
import { USER_ROLE } from "../constant.js";

interface IUser extends Document {
    _id: string,
    name: string,
    email: string,
    password: string,
    avatar: string,
    dob: Date,
    age: number, //virtual Attribute
    role: string,
    gender: string,
    createdAt: Date,
    updatedAt: Date
}

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: [true, "_id is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "EmailId is required"],
      unique: [true, "Email is already exist"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    dob: {
      type: Date,
      required: [true, "DOB is required"],
    },
    avatar: {
      type: String,
    },
    role: {
      type: String,
      required: true,
      enum: [USER_ROLE.ADMIN, USER_ROLE.USER],
      default: USER_ROLE.USER,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: [true, "Please provide your gender"],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.virtual("age").get(function () {
  const today = new Date();
  const dob: Date = this.dob;
  let age: number = today.getFullYear() - dob.getFullYear();
  if (
    today.getMonth() < dob.getMonth() ||
    (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
  ) {
    age--;
  }
  return age;
});

export const User = mongoose.model<IUser>("User", userSchema);
