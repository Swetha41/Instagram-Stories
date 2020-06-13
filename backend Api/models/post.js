const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

//creating schema for post
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    body:{
        type:String,
        require:true
    },
    photo:{
        type:String,
        default:"No photo"
    },
    postedBy:{
        type:ObjectId,
        ref:"User"
    }
})

mongoose.model("Post",postSchema)
