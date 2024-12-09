import express from 'express';
import { authenticateUser, createUser, getUsers, getActiveUsers } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/authenticate', authenticateUser);
router.post('/createUser', createUser)
router.get('/getUsers', getUsers);
router.get('/getActiveUsers', getActiveUsers);


export default router;