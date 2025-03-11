const { isAdmin } = require("../controller/authorization")
const { addBook, getAllBooks, getBookDetails, getAllBooksByGenre, updateBook, deleteBook } = require("../controller/bookController")
const upload = require("../middleware/fileUpload")
const { bookRules, validationMethod } = require("../middleware/validationScript")

const  router = require('express').Router()

router.post('/addbook',isAdmin,upload.single('book_image'), bookRules, validationMethod, addBook)
router.get('/getallbooks', getAllBooks)
router.post('/getallbooks', getAllBooks)
router.get('/getbookdetails/:id', getBookDetails)
router.get('/getbooksbycategory/:genre_id', getAllBooksByGenre)
router.put('/updatebook/:id',isAdmin, upload.single('update_image'),bookRules, validationMethod, updateBook)
router.delete('/deletebook/:id',isAdmin, deleteBook)

module.exports = router