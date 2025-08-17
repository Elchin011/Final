const mongoose = require("mongoose")

const QuestionsSchema = mongoose.Schema({
    question: {
        type: String,
        trim: true,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
})
module.exports = mongoose.model("Questions", QuestionsSchema)