import express from 'express';
import { sendMessage, getMessages } from '../controllers/chat.controller.js';
import { authorize } from '../middlewares/auth.middleware.js';

const router = express.Router();


router.get('/getMessages', authorize, getMessages);


router.post('/sendMessage', authorize, sendMessage);

export default router;