import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  passwordHash: String,
  title: String,
  refreshToken: String,
  isAdmin: Boolean,
  createAt: Date,
  updateAt: Date,
});

export interface User extends mongoose.Document {
  name: string;
  email: string;
  passwordHash: string;
  title: string;
  refreshToken: string;
  isAdmin: boolean;
  createAt: Date;
  updateAt: Date;
}
