const express =require("express")
const loginModel = require("../models/login")
const signupModel = require("../models/signup")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// getting login data

const getLogin = ((req, res) =>{
    res.sendFile("/home/danish/Desktop/projects/puncherwala/public/html/login.html")
})



// posting login data and creating json token 
const loginController = async(req, res) =>{
    const {email, password} = req.body;
    console.log(req.body)
    try{
        const user = await signupModel.findOne({email})
        // if it is not user
        if (!user) {
            res.status(401).send({status:"error",msg:"entered email or password is wrong"})
        }
        const match = await bcrypt.compare(password, user.password);

    if (!match) {
      res.status(401).send({ status: 'error', msg: 'Invalid Password' })
    }
        const userPayload = {email}
        // generating comment
        // console.log(accessToken)
        const accessToken = jwt.sign(userPayload,process.env.AUTH_SECRET_KEY,{algorithm:'HS384',expiresIn:'50d'})
        res.cookie('jwt',accessToken,{maxAge:9000})
        res.redirect("http://localhost:9000/signup")

    
}
    catch(err){
        console.log(err)
        res.status(401).send({status:"error",msg:"login error"})
    }

}

module.exports ={
    getLogin,loginController
}



