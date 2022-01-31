const User = require('../models/model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
require("dotenv/config")

// const register = (req, res, next) => {
//     bcrypt.hash(req.body.password, 10, function(err, hashedPass){
//         if (err){
//             res.json({
//                 error:err
//             })
//         }

//         let user = new User({
//             nama: req.body.nama,
//             username: req.body.username,
//             alamat : req.body.alamat,
//             password: hashedPass,
//             role:req.body.role
//         })
//         user.save()
//         .then(user => {
//             res.json({
//                 message: 'user berhasil registrasi'
//             })
//         })
//         .catch(error => {
//             res.json({
//                 message : 'terjadi error'
//             })
//         })
//     })
// }

const login = (req,res,next)=>{
    var username = req.body.username
    var password = req.body.password

    if (username == "admin" && password == "admin123"){
        let token = jwt.sign({username: username, role:"admin"}, process.env.ACCESS_TOKEN_SECRET , {expiresIn: process.env.ACCESS_TOKEN_EXPIRE_TIME})
        let refreshtoken = jwt.sign({username: username, role:"admin"}, process.env.REFRESH_TOKEN_SECRET , {expiresIn:process.env.REFRESH_TOKEN_EXPIRE_TIME})

        res.json({
            message: 'Login sukses',
            username: username, 
            role: "admin",
            token: token,
            refreshtoken
        })
    }else{
        User.findOne({username:username})
        .then(user => {
            if (user){
                bcrypt.compare(password, user.password, function(err, result){
                    if(err){
                        res.json({
                            error: err
                        })
                    }
                    if (result){
                        let token = jwt.sign({nama : user.nama, username: user.username, role:user.role}, process.env.ACCESS_TOKEN_SECRET , {expiresIn: process.env.ACCESS_TOKEN_EXPIRE_TIME})
                        let refreshtoken = jwt.sign({nama : user.nama, username: user.username, role:user.role}, process.env.REFRESH_TOKEN_SECRET , {expiresIn:process.env.REFRESH_TOKEN_EXPIRE_TIME})

                        res.json({
                            message: 'Login sukses',
                            nama : user.nama, 
                            username: user.username, 
                            role:user.role,
                            token: token,
                            refreshtoken
                        })
                    }else{
                        res.status(200).json({
                            message: 'password salah'
                        })
                    }
                })
            }else{
                res.json({
                    message : 'user tidak ditemukan'
                })
            }
        })
    } 
}


const refreshToken = (req,res,next) => {
    const refreshToken = req.body.refreshToken
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, function(err,decode ){
        if(err){
            res.status(400).json({
                err
            })
        }else{
            let token = jwt.sign({nama: decode.nama, username: decode.username, role:decode.role}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: process.env.ACCESS_TOKEN_EXPIRE_TIME})
            let refreshToken = req.body.refreshToken
            res.status(200).json({
                message:"Token berhasil diperbarui",
                token,
                refreshToken
            })
        }
    })
}

module.exports = {
    login, refreshToken
}