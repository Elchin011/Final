const mongoose=require("mongoose")
const ProductColorSchema=mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    code:{
        type: String,
        trim: true,
        required: true
    }
    
}, {
    timestamps: true
})
module.exports = mongoose.model("ProductColor", ProductColorSchema)