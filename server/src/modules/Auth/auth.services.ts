import UserModel from '../users/user.model';
import { TLoginUser } from './auth.interface';

const loginUser = async (payload: TLoginUser) => {
  const user = await UserModel.isUserExists(payload.email);
  if (!user) {
    throw new Error('User not found');
  }
  if (user.isDeleted) {
    throw new Error('This user is deleted');
  }

  if (!(await UserModel.isPasswordMatched(payload.password, user?.password))) {
    throw new Error('Authentication failed');
  }
  console.log(user);
};

export default {
  loginUser,
};
