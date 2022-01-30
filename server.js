const express = require('express')
const mongose = require('mongoose')
const morgan  = require('morgan')
const bodyParser = require('body-parser')
require("dotenv/config")

// const passport = require('passport')
const UserRoute = require('./routes/routes')
const AuthRoute = require('./routes/auth')

mongose.connect(process.env.MONGODB_URI)
const db = mongose.connection
db.on('error',(err)=>{
    console.log(err)
})

db.once('open',()=>{
    console.log("Database connection established")
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
// app.use(passport.initialize())

// require('./middleware/passport')(passport)

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})

//API aplikasi 
app.use('/api/user', UserRoute)
app.use('/api', AuthRoute)