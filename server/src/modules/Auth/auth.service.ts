import { generateAccessToken } from '../../middlewares/auth';
import { TUser } from '../users/user.interface';
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

const signupUser = async (payload: TUser) => {
  const user = await UserModel.isUserExists(payload.email);
  if (user) {
    throw new Error('User already exist');
  }
  const result = await UserModel.create(payload);
  const jwtPayload = {
    email: payload.email,
    uid: payload.uid,
  };
  const accessToken = generateAccessToken(jwtPayload);
  return { ...result, accessToken };
};

export default {
  loginUser,
  signupUser,
};
