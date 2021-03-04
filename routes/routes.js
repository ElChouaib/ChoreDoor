const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const User =  require("../model/user");
const passport = require('passport')
const bodyparser = require('body-parser')
const bcrypt = require('bcrypt');

//Get ROUTER

router.get("/game",isLoggedIn ,(req,res) =>{
    res.render('game');
})


router.get('/register', (req, res) =>{
    res.render('register')
})

router.post("/register", async(req,res)=>{
    console.log(req.body)
    const { username,email,password } = req.body;
    User.register(new User(
        {username:username,email:email,bestScore:0})
        ,req.body.password,function(err,user){
        if(err){
            console.log(err);
            res.redirect("/register");
        }
    passport.authenticate("local")(req,res,function(){
        res.redirect("/login");
    })    
    })
})


router.get('/login',(req, res) =>{
    res.render('login')
})

router.post("/login",passport.authenticate("local",{
    successRedirect:"/game",
    failureRedirect:"/login"
}),function (req, res){
    console.log('anything');
});

router.get("/logout",(req,res)=>{
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req,res,next) {
    if(req.isAuthenticated()){
        res.render('/game')
    }
    res.redirect("/login");
}
module.exports = router;