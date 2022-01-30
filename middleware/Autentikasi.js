const jwt = require('jsonwebtoken')
const { connection } = require('mongoose')
const passport = require('passport')
require("dotenv/config")

const autentikasi = (req,res, next)=>{
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        
        req.user = decode
        next()

    }catch(error){
        if(error.nama == 'TokenExpiredError'){
            res.status(401).json({
                message: "Token kadaluarsa"
            })
        }
        res.json({
            message: 'Autentikasi gagal'
        })
    }
}



const checkRole = (roles) => {
    return (req,res,next) => {
        console.log(`role usernya ${req.user.role}`)
        console.log(`ini daftar role diizinkan ${roles}`)
        if (roles.includes(req.user.role)){
            // next()
            console.log("Akses diizinkan")
            next()
        }else{
            return res.status(401).json({
                message: "Tidak diizinkan"
            })
        }
    }
}

module.exports = {autentikasi,checkRole}