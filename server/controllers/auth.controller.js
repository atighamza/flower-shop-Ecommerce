const jwt = require('jsonwebtoken')
const User = require('../models/user')
const login = async (req , res) =>{
    const {email , password} = req.body 
    if (!email) { return res.status(400).json({message : "email can't be empty"})}
    if (!password) { return res.status(400).json({message : "password can't be empty"})}
    const userExists = await User.findOne({email})
    if (!userExists){
        return res.status(400).json({message : 'user does not exist'})
    }else{
        if (password != userExists.password){
            return res.status(400).json({message : 'wrong password'})
        }else{
            const name = userExists.name
            jwt.sign({id:userExists._id , name , email , password} , process.env.SECRET_CODE ,(err,token)=>{
                if (err) throw err ; 
                console.log(token)
                res.status(200).json(token)
            })
        }
    }
}   

module.exports = login