//imports 

const express = require('express')
const bodyparser = require('body-parser')
const connectDB = require('./DB/connection')
const MyRouter = require('./routes/routes')


const app = express()
const port = 3000


// mongoose
connectDB();
app.use('/api/usermodel', require('./Api/User'))



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