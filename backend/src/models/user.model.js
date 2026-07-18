const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username :{
        type : String,
        unique : [true,"username already exists"],
        required : [true,"username is required"]
    },
    email: {
        type : String,
        unique:[true,"email already exists"],
        required:[true,"Email is required"]
    },
    password : {
        type:String,
        required : [true,"Password is required "]
    },
    bio : String,
    profile_Image: {
        type : String,
        default:"C:\Users\pasar\OneDrive\Desktop\Sheryians-cohort\Backend-cohort\Project\src\Assests\default-avatar-profile-icon-of-social-media-user-photo-image-vector.webp"
    }
})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel;