const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const User =  require("../model/user");
const passport = require('passport')
const bodyparser = require('body-parser')
const bcrypt = require('bcrypt');
const {LocalStorage} = require('node-localstorage');
  localStorage = new LocalStorage('./scratch')
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

router.post("/update", async (req,res) =>{
    const id = req.body.id;
    const score = req.body.score;
    try {
       /* const user = await User.findOne({_id : id.trim()});
        console.log(user);*/
        await User.updateOne({_id: id.trim()}, {$set:{bestScore: score}});
        res.send("updated successfully");
    } catch (error) {
        console.log(error)
        res.status(400).send("something went wrong")
    }
    
})
router.get('/login',(req, res) =>{
    res.render('login')
})

router.get('*',(req, res) =>{
    res.redirect('/login')
})
router.post("/login",passport.authenticate("local",{
    successRedirect:"/game",
    failureRedirect:"/login"
}),function (req, res){
});

router.get("/logout",(req,res)=>{
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req,res,next) {
    console.log(req.isAuthenticated());
    if(req.isAuthenticated()){
        let data = req.user;   
        res.render('game', {data: data})
    }
    else res.render('login');
}
module.exports = router;