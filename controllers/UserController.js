const UserObj = require('../models/model')

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
    let user = new UserObj({
        nama : req.body.nama,
        alamat: req.body.alamat
    })

    user.save()
    .then(response => {
        res.json({
            message : 'user berhasil disimpan'
        })
    })
    .catch(error => {
        res.json({
            message: 'terjadi error'
        })
    })
}

//UPDATE
const updateUser = (req,res,next)=>{
    let userId = req.body.userId
    let updateData = {
        nama : req.body.nama,
        alamat : req.body.alamat
    }

    UserObj.findByIdAndUpdate(userId, {$set: updateData})
    .then(()=>{
        res.json({
            message: 'user berhasil di update'
        })
    })
    .catch(error => {
        res.json({
            message: 'terjadi error'
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
            message: 'terjadi error'
        })
    })
}

module.exports ={
    index,store, updateUser, deleteUser
}