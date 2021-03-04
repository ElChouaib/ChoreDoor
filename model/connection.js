const mongoose = require('mongoose');


const uri = "mongodb+srv://elchouai:5Comrzyh@choredoor.8geyz.mongodb.net/choredoorDB?retryWrites=true&w=majority";

const connectDB = async()=>{
    await mongoose.connect(uri, {useUnifiedTopology: true,useNewUrlParser: true }).then(()=>{
        console.log('Connected successfuly to the DataBase')
    }
    )
   
}

module.exports = connectDB;