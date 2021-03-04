const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')


//POST ROUTER
router.post('/', async (req, res) => {
    const { firstName, lastName,Email,Score } = req.body;
    let user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.Email = Email;
    user.Score = Score;
    user.password = password
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
  });
  





// GET ROUTER
router.get('', (req, res) =>{
    res.render('index')
})

router.get('/register', (req, res) =>{
    res.render('register')
})

router.get('/login', (req, res) =>{
    res.render('login')
})

module.exports = router;