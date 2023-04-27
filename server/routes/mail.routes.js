const express = require('express')
const route = express.Router()

const sendEmail = require('../controllers/mail.controller')

route.post('/' , sendEmail)

module.exports = route