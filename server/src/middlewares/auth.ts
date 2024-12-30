import jwt from 'jsonwebtoken';
import { TJWTPayload } from '../modules/Auth/auth.interface';
import config from '../app/config';

export const generateAccessToken = (payload: TJWTPayload) => {
  return jwt.sign(payload, config.tokenSecret as string, { expiresIn: '10d' });
};

type TRouteType = 'messages' | 'conversations' | 'settings';

export const auth = (routeType: TRouteType) => {
  return (req, res, next) => {
    const token = req.headers.authorization;
    let currentUid = '';
    console.log(req.body.participants[0].uid);
    if (routeType === 'messages') {
      currentUid = req.body.senderId;
    }

    if (routeType === 'conversations') {
      currentUid = req.body.participants[0].uid;
    }

    if (!token) {
      throw new Error('You are not authorized');
    }
    jwt.verify(token, config.tokenSecret as string, (err, decoded) => {
      if (err) {
        throw new Error('You are not authorized');
      }
      if (decoded.uid !== currentUid) {
        throw new Error('You are not authorized');
      }
      req.user = decoded;
    });
    next();
  };
};
