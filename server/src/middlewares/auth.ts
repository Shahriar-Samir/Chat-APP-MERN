import jwt from 'jsonwebtoken';
import { TJWTPayload } from '../modules/Auth/auth.interface';
import config from '../app/config';

export const generateAccessToken = (payload: TJWTPayload) => {
  return jwt.sign(payload, config.tokenSecret as string, { expiresIn: '10d' });
};
