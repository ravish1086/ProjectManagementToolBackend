import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
    },
    entityType:{
        type: String,
        required: true,
        enum:['Issue','Discussion','Task']
    },
    entityId:{
        type: mongoose.Schema.Types.ObjectId,
        refPath:'entityType',
        required: true
    },
    commentedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    commentedAt: {
        type: Date,
        default: Date.now,
    },
},
    {
        timestamps: true,
    }
);

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;

/* 
{
    "comment": "This is a sample comment.",
    "entityType": "Issue",
    "entityId": "672c65952363828105fe1e8d",
    "commentedBy": "672c65952363828105fe1e8d"
}
    */