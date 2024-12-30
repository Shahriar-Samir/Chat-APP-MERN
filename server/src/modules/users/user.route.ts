import express from 'express';
import { createUser } from './user.controller';

const router = express.Router();

router.post('/', createUser);

const userRoutes = router;

export default userRoutes;
