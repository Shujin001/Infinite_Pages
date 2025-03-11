const { check, validationResult } = require('express-validator')

exports.userRegisterRules = [
    check('username', "Username is required")
        .isLength({ min: 3 }).withMessage("Username must be at least 3 characters")
        .not().isIn(['admin', 'test', 'dog', 'god', 'password']).withMessage("Username not allowed"),
    check('email', "email is required").notEmpty()
        .isEmail().withMessage("Email format incorrect"),
    check('password', "Password is required").notEmpty()
        .matches(/[a-z]/).withMessage("Password must contain at least 1 lowercase alphabet")
        .matches(/[A-Z]/).withMessage("Password must contain at least 1 uppercase alphabet")
        .matches(/[0-9]/).withMessage("Password must contain at least 1 number")
        .matches(/[!@#$%_.-]/).withMessage("Password must contain at least 1 special")
        .isLength({ min: 8 }).withMessage("Password must be at least 8 characters")
        .isLength({ max: 20 }).withMessage("Password must not exceed 20 characters")
]

exports.validationMethod = (req, res, next) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array()[0].msg })
    }
    next()
}

exports.genreRules = [
    check('genre_name', "Genre Name is required").notEmpty()
        .isLength({ min: 3 }).withMessage("Genre must be at least 3 characters")
]
exports.bookRules = [
    check('book_name', "Book Name is required").notEmpty()
        .isLength({ min: 3 }).withMessage("Book must be at least 3 characters"),
    check('book_price', "Book price is required").notEmpty()
        .isNumeric().withMessage("Price must be a number"),
    check('count_in_stock', "Count in Stock is required").notEmpty()
        .isNumeric().withMessage("Count must be a number"),
    check('book_description', "Description is required").notEmpty()
        .isLength({ min: 20 }).withMessage("Description must be at least 20 characters"),
    check('genre', "Genre is required").notEmpty()
        .isMongoId().withMessage("Genre invalid")
]