import express from "express";
import { addComment, getComments } from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/addComment", addComment);
router.get("/getComments", getComments);

export default router;