const mongoose = require("mongoose")

const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
})
module.exports = mongoose.model("Blog", BlogSchema)