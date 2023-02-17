const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
var cors = require("cors");


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


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});