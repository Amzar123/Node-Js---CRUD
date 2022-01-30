const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')
const autentikasi = require('../middleware/Autentikasi')


router.get('/',autentikasi.autentikasi,autentikasi.checkRole(['admin','user']),UserController.index)
router.post('/store', autentikasi.autentikasi,autentikasi.checkRole(['admin']),UserController.store)
router.post('/update',autentikasi.autentikasi,autentikasi.checkRole(['admin']), UserController.updateUser)
router.post('/delete',autentikasi.autentikasi,autentikasi.checkRole(['admin']), UserController.deleteUser)

module.exports= router