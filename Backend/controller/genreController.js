const Genre = require('../models/genreModel')

//add genre
exports.addGenre = async(req,res) => {
    let genre_exists = await Genre.findOne({
        genre_name: req.body.genre_name
    })
    if(genre_exists){
        return res.status(400).json({error:"genre already Exists"})
    }

    let genreToAdd = await Genre.create({
        genre_name: req.body.genre_name
    })
    if(!genreToAdd){
        return res.status(400).json({error:"Something went wrong"})
    }

    res.send(genreToAdd)
}

exports.getAllGenres = async(req,res) =>{
    let categories = await Genre.find()
    if(!categories){
        return res.status(400).json({"error":"something went wrong"})
    }
    res.send(categories)
}
exports.getGenreDetails = async(req,res) =>{
    let genre = await Genre.findById
    (req.params.id)
    if(!genre){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(genre)
} 

//update genre
exports.updateGenre = async(req,res) =>{
    let genreToUpdate = await Genre.findByIdAndUpdate(req.params.id,{
        genre_name: req.body.genre_name
    },{new:true})
    if(!genreToUpdate){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(genreToUpdate)
}
//delete genre
exports.deleteGenre = (req,res) =>{
    Genre.findByIdAndDelete(req.params.id)
    .then(deletedGenre=>{
        if(!deletedGenre){
            return res.status(400).json({error:"Genre not found"})
        }
        res.send({message:"Genre deleted successfully"})
    })
    .catch(error=>res.status(500).json({error:"Something went wrong"}))
}


/*
req.body -> data os passed using form, body
req.params-> data is passed using the request url
req.query -> data is passed using  url; in a variable
res.status(200).send(object/string)
res.status(400).json(object)

200 - ok (default)
300 - relay

error
400 - bad request
401 - unauthorized
403 - unauthorized(forbidden)
404 - not found
500 - server error

CRUD -
        Create - Model.create(obj)

        Read - Model.find() - returns all data
                Model.find(filterObj) - returns all data that matches filterObj
                Model.findOne(filterObj) - returns first data that matches filterObj
                Model.findBiId(id) - returns data that matches id
        Update - Model.findByIdAndUpdate(id, updateingObj, option)
                id - what to update
                updatingObj - which fields to update, updating data
                option - ...
        Delete- Model.findByIdAndDelete(id) - removes data with the given id

*/