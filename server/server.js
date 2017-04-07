const express = require('express');

const {authenticate} = require('./authenticate/authenticate.js');
const port    = process.env.PORT || 3000;

let app = express();



app.get('/', (req, res)=>{
  res.sendFile(__dirname+'/public/index.html');
});

app.get('/:id', authenticate,(req, res)=>{
  res.send(req.timeObject);
});

app.listen(port, ()=>{
  console.log("Server is up and running on port 3000!");
});
