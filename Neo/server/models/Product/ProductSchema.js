const mongoose = require("mongoose")
const ProductColorSchema = require("./ProductColorSchema")

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
  
    stockQuantity: {
        type: Number,
        default: 0
    },
    categories: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductCategory"
    },
    sizes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductSize"
    },
    colors: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductColor"


    }
})
module.exports = mongoose.model("Product", ProductSchema)