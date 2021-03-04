//imports 
const express = require('express')
const passport = require('passport')
const mongoose = require('mongoose')
const LocalStrategy  =  require("passport-local")
const passportLocalMongoose =  require("passport-local-mongoose")
const User = require('./model/user')
//const connectDB = require('./DB/connection')
const MyRouter = require('./routes/routes')
const bodyParser = require('body-parser')

const app = express()
const port = 3000


// mongoose
const uri = "mongodb+srv://elchouai:5Comrzyh@choredoor.8geyz.mongodb.net/choredoorDB?retryWrites=true&w=majority";
mongoose.connect(uri,{useUnifiedTopology: true,useNewUrlParser: true }).then(()=>{
    console.log("Connection made successfully");
})
app.use(require("express-session")({
secret:"ChouaibKey",
    resave: false,          
    saveUninitialized:false    
}));

passport.serializeUser(User.serializeUser());       //session encoding
passport.deserializeUser(User.deserializeUser());   //session decoding
passport.use(new LocalStrategy(User.authenticate()));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded(
      { extended:true }
))
app.use(passport.initialize());
app.use(passport.session());

//Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))



//Set views
app.set('views', './views')
app.set('view engine', 'ejs')

app.use(MyRouter);



// Listen on port 3000
app.listen(port, ()=> console.info('open: <localhost:'+port+ '> in your browser'))