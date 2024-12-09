import express from 'express';
import { createDiscussion, getDiscussions, updateDiscussion,deleteDiscussion } from '../controllers/discussion.controller.js';
import { authorize } from '../middlewares/auth.middleware.js';
const router = express.Router();

router.post('/createDiscussion', authorize, createDiscussion);
router.get('/getDiscussions', getDiscussions);
router.post('/updateDiscussion',authorize, updateDiscussion);
router.get('/deleteDiscussion', deleteDiscussion);
export default router;