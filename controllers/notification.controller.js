import mongoose from "mongoose";

import Notification from "../models/notification.model.js";

 const createNotification = async (notification) => {

    try {
        let creatednotification = await Notification.create(notification);
        return creatednotification;
    } catch (error) {
        throw new Error(error.message);
    }
}

 const getNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find(
            {
                users: req.user._id 
            }
        ).sort({ createdAt: -1 }).populate('user', 'username email fullName role designation').lean();
        res.status(200).json({ message:'Success', notifications: notifications});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export { createNotification, getNotifications };

