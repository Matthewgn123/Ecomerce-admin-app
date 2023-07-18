const mongoose = require("mongoose")

const invSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "please but something"]
        },
        completed: {
            type: Boolean, 
            required: true,
        }
    },
    {
        timestamps: true
    }
)

const Inv = mongoose.model("Inv", invSchema)

model.exports = Inv

