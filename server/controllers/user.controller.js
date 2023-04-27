const mongoose = require('mongoose')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const getAllUsers = async (req , res)=>{
    try{
        const users = await User.find({})
        res.status(200).json(users)
    }catch(err){
        res.status(500).json({message :  err.message})
    }
};

const createUser = async (req , res)=>{
    try{
        const {name , email , password} = req.body 
        console.log(name , email , password)
        if (!name) { return res.status(400).json({message : "name can't be empty"})}
        if (!email) { return res.status(400).json({message : "email can't be empty"})}
        if (!password) { return res.status(400).json({message : "password can't be empty"})}
    
        const userExists = await User.findOne({email})
        if (userExists) { return res.status(400).json({message : 'user already exists'})}
        else {
            var hashed 
            bcrypt.hash(password , 10).then(function(hash) {
                hashed=hash
            })
            .catch(err=>{
                res.status(500).json({message : err.message})
            })
            const newUser = new User({name , email , password })
            console.log(newUser)
            await newUser.save()
            console.log("user created successfuly")
            res.status(200).json(newUser)
        }
    }catch(err){
        res.status(500).json({message : err.message})
    }
};

const getUserById = async (req , res)=>{
    try {
        const { id } = req.params;

        const user = await User.findOne({ _id: id })

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllUsers , 
    createUser , 
    getUserById
}