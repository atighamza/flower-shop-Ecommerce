const express = require('express')
const route = express.Router()

const { getAllCoupons , createCoupon  , getCouponByCode } = require('../controllers/coupon.controller')

route.get('/' , getAllCoupons)
route.post('/' , createCoupon)
route.get('/:code' , getCouponByCode)
module.exports = route