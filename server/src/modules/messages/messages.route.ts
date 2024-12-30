import express from 'express';
import { sendMessage } from './messages.controller';

const router = express.Router();

router.post('/', sendMessage);

const messageRoutes = router;

export default messageRoutes;
