const express = require("express")

const getHome = async(req, res) => {
    res.sendFile("/home/danish/Desktop/projects/puncherwala/public/html/Home.html")
}

// post

// const postHome = async(req, res) => {
//     const data = req.body;
// }

module.exports={
    getHome
}