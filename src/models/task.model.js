import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
        
    },
    date: {
        type: Date,
        default: Date.now,
    },
    done: {
        type: Boolean,
        default: false,
    },
    user: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
}, {
    timestamps: true,
});

export default mongoose.model("Task", taskSchema);