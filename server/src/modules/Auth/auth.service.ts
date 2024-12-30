import { generateAccessToken } from '../../middlewares/auth';

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

  const jwtPayload = {
    email: user.email,
    uid: user.uid,
  };

  const accessToken = generateAccessToken(jwtPayload);
  return { accessToken };
};

export default {
  loginUser,
};
