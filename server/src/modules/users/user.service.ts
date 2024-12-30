import { generateAccessToken } from '../../middlewares/auth';
import SettingsModel from '../settings/settings.model';
import { TUser } from './user.interface';
import UserModel from './user.model';

export const createUserIntoDB = async (payload: TUser) => {
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

  const settings = {
    uid: payload.uid,
    name: payload.name,
    email: payload.email,
  };
  await SettingsModel.create(settings);
  return { result, accessToken };
};
