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
    createdAt:{
        type: String,
        required:true
    },
    videoId:{
        type:String,
        require:true
    }
},{timestamps: true});

export const commentsCollection = mongoose.model("Comments", commentsSchema);