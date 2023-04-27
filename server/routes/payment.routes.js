const express = require('express')
const route = express.Router()

const {addPayment} = require('../controllers/payment.controller')

route.post('/' , addPayment)


module.exports = route