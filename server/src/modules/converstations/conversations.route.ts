import express from 'express';
import { auth } from '../../middlewares/auth';
import { createConversation } from './conversations.controller';

const router = express.Router();

router.post('/', auth('conversations'), createConversation);

const conversationRoutes = router;

export default conversationRoutes;
