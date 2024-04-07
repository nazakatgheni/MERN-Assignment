const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        // validation
        required: [true, "Title is required"],
        minLength: [3, "Title must be at least 3 characters long"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        minLength: [1, "Price must be at least 1 characters long"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        min: [3, "Description must be at least 3 characters long"]
    }
},
    { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;