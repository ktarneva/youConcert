import mongoose, { Schema } from "mongoose";

const commentsSchema = new Schema({
    title:{
        type: String,
        required:true
    },
    body: {
        type: String,
        required:true
    },
    videoId: {
        type: String,
        required:true
    },
    moderationStatus:  { 
        type: String,
         enum: ['pending', 'approved', 'rejected'], default: 'pending' 
        },
},{timestamps: true});

export const commentsCollection = mongoose.model("Comments", commentsSchema);