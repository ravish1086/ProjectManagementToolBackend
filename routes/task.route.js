import express from "express";
import { getTasks, createTask, updateTask, deleteTask } from "../controllers/task.controller.js";
import { authorize } from "../middlewares/auth.middleware.js";
import upload from '../utils/fileupload.utils.js';
const router = express.Router();

router.get("/getTasks", getTasks);

router.post("/createTask", authorize, upload.single('taskAttachment'), createTask);
router.post("/updateTask", authorize, upload.single('taskAttachment'), updateTask);
router.get("/deleteTask", authorize, deleteTask);

export default router;
