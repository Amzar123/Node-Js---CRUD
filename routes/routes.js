const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')
const autentikasi = require('../middleware/Autentikasi')


router.post('/',autentikasi.autentikasi,autentikasi.checkRole(['admin','user']),UserController.index)
router.get('/all-data', autentikasi.autentikasi,autentikasi.checkRole(['admin']),UserController.getAll)
router.post('/add', autentikasi.autentikasi,autentikasi.checkRole(['admin']),UserController.store)
router.post('/update',autentikasi.autentikasi,autentikasi.checkRole(['admin']), UserController.updateUser)
router.delete('/delete',autentikasi.autentikasi,autentikasi.checkRole(['admin']), UserController.deleteUser)

module.exports= router