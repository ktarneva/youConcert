import mongoose, { Schema } from "mongoose";

const recommendationsSchema = new Schema({
    id: {
        type: String,
        required: true,
      },
    title:{
        type: String,
        required:true
    },
    body: {
        type: String,
        required:true
    }
},{timestamps: true});
const Recommendations = mongoose.model("Recommendations",recommendationsSchema);
module.exports = Recommendations;