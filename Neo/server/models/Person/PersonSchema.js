const mongoose = require("mongoose")


const PersonSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
   
    imageUrl: {
        type: String,
        required: true
    },
    specialty:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "PersonSpecialty"
    }
})
module.exports = mongoose.model("Person", PersonSchema)