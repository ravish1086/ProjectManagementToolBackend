import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
    },
    agency: {
        type: String,
    },
},
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);

export default User;


// Dummy request JSON for the User model
const dummyUser = {
    username: "john_doe",
    password: "securepassword123",
    fullName: "John Doe",
    email: "john.doe@example.com",
    designation: "Software Engineer",
    role: "Developer",
    contactNumber: "123-456-7890",
    profilePicture: "http://example.com/profile.jpg",
    agency: "Tech Solutions"
};
