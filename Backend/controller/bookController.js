const BookModel = require('../models/bookModel')
const fs = require('fs')

//add book
exports.addBook = async (req, res) => {
    let bookToAdd = await BookModel.create({
        book_name: req.body.book_name,
        book_price: req.body.book_price,
        book_description: req.body.book_description,
        count_in_stock: req.body.count_in_stock,
        genre: req.body.genre,
        book_image: req.file?.path
    })
    if (!bookToAdd) {
        return res.status(400).json({ error: "Something went wrong" })
    }
    res.send(bookToAdd)
}
//get all books

exports.getAllBooks = async (req, res) => {
    //req.body = {genre: [a,b], book_price:[x,y]}
    let args = {}
    for (var key in req.body) {
        if (req.body[key].length > 0) {
            if (key == 'genre') {
                args[key] = req.body['genre']
            }
            else {
                args[key] = {
                    $lte: req.body[key][1],
                    $gte: req.body[key][0]
                }
            }
        }
    }
    let books = await BookModel.find(args).populate('genre')
    if (!books) {
        return res.status(400).json({ error: "something went wrong" })
    }
    res.send(books)
}
//get book details

exports.getBookDetails = async (req, res) => {
    let book = await BookModel.findById(req.params.id).populate('genre')
    if (!book) {
        return res.status(400).json({ error: "something went wrong" })
    }
    res.send(book)
}
//get all books by genre
exports.getAllBooksByGenre = async (req, res) => {
    let books = await BookModel.find({ genre: req.params.genre_id }).populate('genre')
    if (!books) {
        return res.status(400).json({ error: "Something went wrong" })
    }
    res.send(books)
}
//update book
exports.updateBook = async (req, res) => {
    // let bookToUpdate = await bookModel.findByIdAndUpdate(req.params.id,
    //     {
    //         book_name:req.body.book_name,
    //         book_price:req.body.book_price,
    //         book_description:req.body.book_description,
    //         count_in_stock:req.body.count_in_stock,
    //         genre:req.body.genre
    //     },
    //     {new: true}
    // )

    let bookToUpdate = await BookModel.findById(req.params.id)
    let { book_name, book_price, book_description, count_in_stock, rating, genre } = req.body
    bookToUpdate.book_name = book_name ? book_name : bookToUpdate.book_name
    bookToUpdate.book_price = book_price ? book_price : bookToUpdate.book_price
    bookToUpdate.book_description = book_description ? book_description : bookToUpdate.book_description
    bookToUpdate.count_in_stock = count_in_stock ? count_in_stock : bookToUpdate.count_in_stock
    bookToUpdate.rating = rating ? rating : bookToUpdate.rating
    bookToUpdate.genre = genre ? genre : bookToUpdate.genre
    if (req.file) {
        if (bookToUpdate.book_image) { fs.unlinkSync(bookToUpdate.book_image) }
        bookToUpdate.book_image = req.file.path
    }
    bookToUpdate = await bookToUpdate.save()

    if (!bookToUpdate) {
        return res.status(400).json({ error: "Something went wrong" })
    }
    res.send(bookToUpdate)
}
//delete book
exports.deleteBook = (req, res) => {
    BookModel.findByIdAndDelete(req.params.id)
        .then(BookModel => {
            if (!BookModel) {
                return res.status(400).json({ error: "Book not found" })
            }
            res.send({ message: "Book deleted successfully" })
        })
        .catch(error => res.status(500).json({ error: "Something went wrong" }))
} 