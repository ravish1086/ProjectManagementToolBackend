import mongoose from "mongoose";
import Comment from "../models/comments.model.js";
import {getTimeAgo} from "../utils/timestamp-format-utils.js";

const addComment = async (req, res) => {
    let comment = req.body;
    // comment.commentId = new mongoose.Types.ObjectId();
    try {
        let createdComment = await Comment.create(comment);
        if (createdComment) {
            res.status(201).json({ message: "Comment created", comment: createdComment });
        }
        else {
            res.status(400).json({ message: "Comment not created" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const getComments = async (req, res) => {
    try {
        let entityId  = req.query.entityId;
        let entityType = req.query.entityType;
        let comments = await Comment.find({ entityType: entityType, entityId: entityId })
        .populate('commentedBy', 'username email fullName role designation').lean();

        const commentsWithTimeAgo = comments.map((comment) => ({
            ...comment,
            createdAtAgo: getTimeAgo(comment.createdAt), // Add "time ago"
        }));

        if (comments) {
            res.status(200).json({ comments: commentsWithTimeAgo });
        }
        else {
            res.status(404).json({ message: "Comments not found" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export { addComment, getComments };