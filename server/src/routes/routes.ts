import userRoutes from '../modules/users/user.route';
import express from 'express';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
