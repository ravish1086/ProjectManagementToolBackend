import express from "express";
import { getProjects, createProject } from "../controllers/project.controller.js";
import { authorize } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.get("/getProjects", authorize, getProjects);
router.post("/createProject", authorize, createProject);


export default router;