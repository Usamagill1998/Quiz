const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
    {
        questionId: { type: String },
        questionText: { type: String, required: true, unique: true },
        options: { type: Array, required: true },
        marks: { type: Number, required: true },
        difficultyLevel: { type: Number },
        questionType: { type: String, required: true },
        correctOptions: { type: Array, required: true },
        addedAt: { type: Date, default: Date.now },
        quiz: {
            type: ObjectId,  
            ref: "Quiz",
             required: true
        },
    },
    { timestamps: true }
);
module.exports = mongoose.model("Product", productSchema);