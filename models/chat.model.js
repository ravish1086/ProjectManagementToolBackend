import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        default: 'unread'
    },
    },
    {
        timestamps: true,
    }
);

const Chat  = mongoose.model('Chat', chatSchema);

export default Chat;

// Sample JSON for the above schema
const sampleChat = {
    message: "Hello, how are you?",
    sender: "672c659523",
    receiver: "672c64f723",
    status: "unread"
}