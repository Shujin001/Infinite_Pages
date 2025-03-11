const mongoose = require('mongoose')
const {ObjectId}= mongoose.Schema

const bookSchema = new mongoose.Schema({
    book_name:{
        type:String,
        required:true,
        trim:true
    },
    book_price:{
        type:Number,
        required:true
    },
    book_description:{
        type:String,
        required: true
    },
    count_in_stock:{
        type:Number,
        required: true
    },
    rating:{
        type:Number,
        default:1
    },
    genre:{
        type:ObjectId,
        ref:"Genre"
    },
    book_image:{
        type:String
    }

},{timestamps:true})

module.exports = mongoose.model("Book",bookSchema)