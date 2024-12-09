import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        read: {
            type: Boolean,
            default: false,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        users: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }],
        entityId: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
        },
        entityType: {
            type: String,
            required: true,
            enum:['Issue','Discussion','Task']
        },
    },
    {
        timestamps: true,
    });


    const Notification = mongoose.model('Notification', notificationSchema);

    export default Notification;

// Dummy request JSON for the Notification model
const dummyNotification = {
    title: "New Task Assigned",
    message: "You have been assigned a new task",
    read    : false,
    user: "672c",    // Example ObjectId for User
    entityId: "672c", // Example ObjectId for Task
    entityType: "Task"
}