const express = require('express')
const route = express.Router()

const { getAllUsers , createUser , getUserById } = require('../controllers/user.controller')
const login = require('../controllers/auth.controller')
route.get('/' , getAllUsers)
route.post('/' , createUser)
route.get('/:id' , getUserById)
route.post('/login' , login )

module.exports = route