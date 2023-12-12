import mongoose from "mongoose";
import { Document, PreSaveMiddlewareFunction, Types, ObjectId } from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface UserDocument extends Document<Types.ObjectId> {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updateAt: Date;
}

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  let user = this as UserDocument;
  if (!user.isModified("password")) {
    return next();
  }
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
