const UserModel = require('../models/UserModel')
const TokenModel = require('../models/TokenModel')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const emailSender = require('../middleware/emailSender')
const jwt = require('jsonwebtoken')

// register
exports.signUp = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Debugging
        console.log("Received Data:", req.body);

        // Check if all fields are provided
        if (!username || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Check username availability
        let userToAdd = await UserModel.findOne({ username });
        if (userToAdd) {
            return res.status(400).json({ error: "Username not available" });
        }

        // Check if email is registered
        userToAdd = await UserModel.findOne({ email });
        if (userToAdd) {
            return res.status(400).json({ error: "Email already registered. Choose another" });
        }

        // Encrypt password
        const hashed_password = await bcrypt.hash(password, 10);
        console.log("Hashed Password:", hashed_password);

        // Add user to database
        userToAdd = await UserModel.create({ username, email, password: hashed_password });

        res.status(201).json({ message: "User registered successfully!" });

    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ error: "Internal server error" });
    }



    // generate verification token and send in email
    let tokenObj = await TokenModel.create({
        user: userToAdd._id,
        token: crypto.randomBytes(24).toString('hex')
    })
    if (!tokenObj) {
        return res.status(400).json({ error: "Something went wrong." })
    }

    let URL = `${process.env.FRONTEND_URL}/verify/${tokenObj.token}`

    emailSender({
        from: `noreply@something.com`,
        to: req.body.email,
        subject: `Verfication Email`,
        text: `Click on the following link to verify your account.`,
        html: `<a href='${URL}'><button>Verify Now</button></a>`
    })

    // send message to user
    res.send({ message: "User registered successfully", userToAdd })
}

// verify email
exports.verifyAccount = async (req, res) => {
    // check if token is valid or not
    let tokenObj = await TokenModel.findOne({ token: req.params.token })
    if (!tokenObj) {
        return res.status(400).json({ error: "Invalid token or token may have expired" })
    }
    // find user
    let user = await UserModel.findById(tokenObj.user)
    if (!user) {
        return res.status(400).json({ error: "User associated with token not found" })
    }
    // check if user is already verified
    if (user.isVerified) {
        return res.status(400).json({ error: "User already verified. Login to continue" })
    }
    // verify user 
    user.isVerified = true

    // save user and send message to frontend
    user = await user.save()
    if (!user) {
        return res.status(400).json({ error: "Something went wrong." })
    }
    res.send({ message: "User verified successfully" })
}

// forget password
exports.forgetPassword = async (req, res) => {
    // check if email is registered or not
    let user = await UserModel.findOne({ email: req.body.email })

    if (!user) {
        return res.status(400).json({ error: "Email not registered" })
    }

    // generate password reset token
    let tokenObj = await TokenModel.create({
        user: user._id,
        token: crypto.randomBytes(24).toString('hex')
    })
    if (!tokenObj) {
        return res.status(400).json({ error: "Something went wrong" })
    }

    // send token in email
    let URL = `${process.env.FRONTEND_URL}/resetpassword/${tokenObj.token}`

    emailSender({
        from: `noreply@something.com`,
        to: req.body.email,
        subject: `Password reset email.`,
        text: `Click on the following link to reset your password.`,
        html: `<a href='${URL}'><button>Reset Password</button></a>`
    })

    res.send({message:"Password reset link has been sent to your email"})
}
// reset password
exports.resetPassword = async (req, res) => {
    // check if token is valid or not
    let tokenObj = await TokenModel.findOne({ token: req.params.token })
    if (!tokenObj) {
        return res.status(400).json({ error: "Invalid token or token may have expired" })
    }
    // find user
    let user = await UserModel.findById(tokenObj.user)
    if (!user) {
        return res.status(400).json({ error: "User associated with token not found" })
    }
    // encrypt password and save in database
    let hashed_password = await bcrypt.hash(req.body.password,10)
    user.password= hashed_password


    // save user and send message to frontend
    user = await user.save()
    if (!user) {
        return res.status(400).json({ error: "Something went wrong." })
    }
    res.send({ message: "Password Changed successfully" })
}

//login
exports.signin = async (req, res) =>{
    const {email, password} = req.body
    //check if email is registered or not
    let user = await UserModel.findOne({email})
    if (!user){
        return res.status(400).json({ error: "Email not registered"})
    }
    //check if password is correct or not
    let passwordMatch = await bcrypt.compare (password, user.password)
    if(!passwordMatch){
        return res.status(400).json({ error: "Email and password doesnot match"})
    }

    //check if user is verified or not
    if(!user.isVerified){
        return res.status(400).json({ error: "User not verified. Verify first"})
    }

    //generate login token
    const token = jwt.sign({
        _id:user._id,
        email,
        isAdmin: user.isAdmin,
        username: user.username
    }, process.env.JWT_SECRET, {expiresIn:"24h"})
    if(!token){
        return res.status(400).json({ error: "Something went wrong"})
    }

    //send token/user information to frontend
    res.send({token,
        user:{
        _id:user._id,
        email,
        isAdmin: user.isAdmin,
        username: user.username
        }
    })
}