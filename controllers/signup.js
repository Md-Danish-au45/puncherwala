const express = require("express")
const signupModel = require("../models/signup")
const postSignup = async(req, res) => {
    const signupdData = req.body;
    // hashpass= await bcrypt.hash(signupdData.password,5)
    // signupdData.password=hashpass
    console.log(signupdData)

    try{
        const signupDetails = await signupModel.create(signupdData)
        res.redirect("http://localhost:9000/login")
    }
    catch(err){
        res.send(err)
    }
}

const getSignup = (req, res) =>{
    res.sendFile("/home/danish/Desktop/projects/puncherwala/public/html/signup.html")
}



module.exports = {
    getSignup,postSignup
}