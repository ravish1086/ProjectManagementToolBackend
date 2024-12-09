import express from 'express';

import { getIssues, createIssue } from '../controllers/issue.controller.js';

const router = express.Router();

router.get('/getIssues', getIssues);
router.post('/createIssue', createIssue);

export default router;
