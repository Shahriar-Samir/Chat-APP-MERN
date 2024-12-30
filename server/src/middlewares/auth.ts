import jwt from 'jsonwebtoken';
import { TJWTPayload } from '../modules/Auth/auth.interface';
import config from '../app/config';

export const generateAccessToken = (payload: TJWTPayload) => {
  return jwt.sign(payload, config.tokenSecret as string, { expiresIn: '10d' });
};

export const auth = (req, res, next) => {
  const token = req.headers.authorization;
  const { senderId } = req.body;

  if (!token) {
    throw new Error('You are not authorized');
  }
  jwt.verify(token, config.tokenSecret as string, (err, decoded) => {
    if (err) {
      throw new Error('You are not authorized');
    }
    if (decoded.uid !== senderId) {
      throw new Error('You are not authorized');
    }
    req.user = decoded;
  });
  next();
};
