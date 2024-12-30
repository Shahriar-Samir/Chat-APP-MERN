import express from 'express';
import { sendMessage } from './messages.controller';
import { auth } from '../../middlewares/auth';

const router = express.Router();

router.post('/', auth('messages'), sendMessage);

const messageRoutes = router;

export default messageRoutes;
