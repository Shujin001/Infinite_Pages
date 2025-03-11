const mongoose = require('mongoose')

const genreSchema = new mongoose.Schema({
    genre_name:{
        type: String,
        required: true,
        trim: true
    }
},{timestamps: true})
module.exports = mongoose.model("Genre",genreSchema)

// _id-> 24 bit hex string -> ObjectId
// timestamps -> createdAt, updatedAt