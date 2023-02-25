const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
var cors = require("cors");
const mongodb = require('mongodb');
const mongoose = require('mongoose');


//Objects from models

const facultyObj = require('./models/faculty')


app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.use(cors());


// CONNECTING SERVER TO MONGODB DATABASE --------------------------------------------------------
mongoose.connect("mongodb://127.0.0.1:27017/LMS");
var db = mongoose.connection;

db.on("error", console.log.bind(console, "Connection Error"));
db.once("open", () => {
    console.log("Connection Successful");
});




app.get('/', (req, res) => {
  res.send('Abhishek chorotiya')
});


app.post('/adminLogin',(req,res)=>{

  const username = 'admin'
  const password = 'admin'
  // console.log(req.body)
  if(req.body.username==username && req.body.password == password){
    res.send(true)
  }else{
    res.send(false)
  }

})

app.post('/regStudents',(req,res)=>{

    for(let val in req.body){
      console.log(req.body[val].name)
    }

})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});