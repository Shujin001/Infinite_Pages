const express = require('express')
require('dotenv').config()
require('./database/connection')

const morgan = require('morgan')

const cors = require('cors')

const app = express() 
const port=process.env.PORT

const testRoute = require('./routes/testRoutes')
const genreRoute = require('./routes/genreRoute')
const bookRoute = require('./routes/bookRoute')
const userRoute = require('./routes/userRoute')

app.use(express.json())
app.use(cors())
app.use(testRoute)
app.use(genreRoute)
app.use(bookRoute)
app.use(userRoute)
app.use(morgan('dev'))

app.use('/public/uploads', express.static('public/uploads'))

app.listen(port,() => {
    console.log("App started successfully.")
})