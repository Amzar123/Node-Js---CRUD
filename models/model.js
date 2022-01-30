const mongoose = require("mongoose")

const schema = mongoose.Schema({
    nama: {
        type: String,
        require: true
    },
    alamat:{
        type: String,
        require: true
    },
    username:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    role: {
        type: String,
        default: "user",
        enum:["admin","user"]
    }
},{
    collection: 'user'
})

module.exports = mongoose.model('user',schema)