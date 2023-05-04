const express = require('express')
const route = express.Router()

const { getAllUsers , createUser , getUserById , updateName , updatePassword } = require('../controllers/user.controller')
const login = require('../controllers/auth.controller')
route.get('/' , getAllUsers)
route.post('/' , createUser)
route.get('/:id' , getUserById)
route.post('/login' , login )
route.patch('/profile/username' , updateName)
route.patch('/profile/password' , updatePassword)

module.exports = route