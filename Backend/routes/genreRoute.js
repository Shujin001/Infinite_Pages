const express = require('express')
const { addGenre, getAllGenres, getGenreDetails, updateGenre, deleteGenre } = require("../controller/genreController")
const { validationMethod, genreRules } = require('../middleware/validationScript')
const { isLoggedIn, isAdmin } = require('../controller/authorization')

const router = express.Router()

router.post('/addgenre', isAdmin, genreRules, validationMethod, addGenre)
router.get('/getAllGenres',getAllGenres)
router.get('/getGenredetails/:id',getGenreDetails)
router.put('/updategenre/:id',isAdmin, updateGenre)
router.delete('/deletegenre/:id',isAdmin, deleteGenre)
module.exports = router 