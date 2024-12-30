import express from 'express';
import { loginUser, signupUser } from './auth.controller';

const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', signupUser);

const authRoutes = router;

export default authRoutes;
