const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
    { 
        // id: {
        // type: Number,
        // trim: true,
        // required: true,
        // maxlength: 32,
        // unique: true
        // },
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
            unique: true
        },
        price:{
            type: Number,
            trim: true,
            required: true,
            maxlength: 32,
            unique: true
        },
        subscriptionTime:{
            type: Date,
            trim: true,
            required: true,
            maxlength: 32,
            unique: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
