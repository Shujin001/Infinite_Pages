const jwt = require('jsonwebtoken')

exports.isLoggedIn = (req, res, next) => {
    if(!req.headers.authorization){
        return res.status(401).json({error:"YOU MUST SIGNIN TO ACCESS THIS RESOURSES"})
    }
    next()
}
exports.isAdmin = (req, res, next) =>{
    //jwt.verify()
    let user = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
    // console.log(user)
    if(!user.isAdmin){
        return res.status(403).json({error:"YOU MUST BE ADMIN TO ACCESS THIS RESOURCE"})
    }
    next()
}