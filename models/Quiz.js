const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
    {
        Name: { type: String },
        Time: { type: Date, required: true, unique: true },
        category: {
            type: ObjectId, 
            ref: "Category",
             required: true
        },
    },
    { timestamps: true },
    
);
module.exports = mongoose.model("Quiz", productSchema);