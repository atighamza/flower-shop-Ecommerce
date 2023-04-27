const Coupon = require('../models/coupon')

const getAllCoupons = async (req , res) => {
    try{
        const coupons = await Coupon.find({})
        res.status(200).json(coupons)
    }catch(err){
        res.status(500).json({message : err.message})
    }
}


const createCoupon = async (req , res)=>{
    try{
        const {code, discount} = req.body 
        if (!code) { return res.status(400).json({message : "code can't be empty"})}
        if (!discount) { return res.status(400).json({message : "discount can't be empty"})}

        const CouponExists = await Coupon.findOne({code})
        if (CouponExists) { return res.status(400).json({message : 'coupon already exists'})}
        else {
            const newCoupon = new Coupon({ code , discount })
            console.log(newCoupon)
            await newCoupon.save()
            console.log("coupon created successfuly")
            res.status(200).json(newCoupon)
        }
    }catch(err){
        res.status(500).json({message : err.message})
    }
}

const getCouponByCode = async (req , res) =>{
    try{
        const { code } = req.params
        console.log(code)
        const coupon = await Coupon.findOne({code : code})
        console.log(coupon)
        if (coupon) {
            console.log('working')
            res.status(200).json(coupon)
        }else {
            console.log('not working')
            res.status(404).json({ message: "coupon not found" });
        }
        
    }catch(err){
        res.status(500).json({message : err.message})
    }
    
}
module.exports = { getAllCoupons , createCoupon  , getCouponByCode }