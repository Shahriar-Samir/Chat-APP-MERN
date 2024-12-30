import { TUser } from './user.interface';
import UserModel from './user.model';

export const createUserIntoDB = async (userData: TUser) => {
  const result = await UserModel.create(userData);
  return result;
};
