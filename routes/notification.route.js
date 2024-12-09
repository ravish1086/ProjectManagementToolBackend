import express from 'express';
import { getNotifications } from '../controllers/notification.controller.js';
import { authorize } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/getNotifications',authorize, getNotifications);

export default router;