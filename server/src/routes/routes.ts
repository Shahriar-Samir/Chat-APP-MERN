import userRoutes from '../modules/users/user.route';
import express from 'express';
import authRoutes from '../modules/Auth/auth.route';
import messageRoutes from '../modules/messages/messages.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/messages',
    route: messageRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
