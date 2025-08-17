const bcyrpt = require("bcrypt")
const HashPassword=async()=>{
    return await bcyrpt.genSalt(10)
}
module.exports={HashPassword}