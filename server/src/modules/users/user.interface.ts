/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export interface TUser {
  uid: string;
  name: string;
  email: string;
  password: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserModel extends Model<TUser> {
  isUserExists(email: string): Promise<TUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
