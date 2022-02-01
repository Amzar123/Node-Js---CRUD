const UserObj = require('../models/model')
const bcrypt = require('bcryptjs')

//READ
const index = (req,res,next)=>{
    UserObj.find()
    .then(respone=>{
        res.json({
            respone
        })
    })
    .catch(error => {
        res.json({
            message: error
        })
    })
}


//CREATE 
const store = (req,res,next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if (err){
            res.json({
                error:err
            })
        }

        let user = new UserObj({
            nama: req.body.nama,
            username: req.body.username,
            alamat : req.body.alamat,
            password: hashedPass,
            role:req.body.role
        })
        user.save()
        .then(user => {
            res.json({
                message: 'User berhasil ditambahkan'
            })
        })
        .catch(error => {
            res.json({
                message : error
            })
        })
    })
}

//UPDATE
const updateUser = (req,res,next)=>{
    let userId = req.body.userId
    let updateData = {
        nama : req.body.nama,
        alamat : req.body.alamat,
        username : req.body.username, 
        password : req.body.password,
        role : req.body.role
    }

    UserObj.findByIdAndUpdate(userId, {$set: updateData})
    .then(()=>{
        res.json({
            message: 'user berhasil di update'
        })
    })
    .catch(error => {
        res.json({
            message: error
        })
    })
}

//DELETE
const deleteUser = (req,res,next)=>{
    let userId = req.body.userId
    UserObj.findByIdAndRemove(userId)
    .then(()=>{
        res.json({
            message: 'user berhasil dihapus'
        })
    })
    .catch(error => {
        res.json({
            message: error
        })
    })
}

module.exports ={
    index,store, updateUser, deleteUser
}