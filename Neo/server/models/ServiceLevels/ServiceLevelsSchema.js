const mongoose = require("mongoose")

const ServiceLevelsSchema = mongoose.Schema({
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
})
module.exports = mongoose.model("ServiceLevels", ServiceLevelsSchema)