const { signUp, verifyAccount, forgetPassword, resetPassword, signin } = require('../controller/userController')
const { userRegisterRules, validationMethod } = require('../middleware/validationScript')

const router = require('express').Router()

router.post('/register', signUp, userRegisterRules, validationMethod)
router.get('/verify/:token',verifyAccount)

router.post('/forgetpassword', forgetPassword)
router.post('/resetpassword/:token', resetPassword)
router.post('/login', signin)

module.exports = router