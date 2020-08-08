const express = require('express')
const app = express()
const path = require('path')
const http = require('http')
const fs = require('fs');

app.use(express.urlencoded({
  extended: true
}))
// var bodyParser = require('body-parser');
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4005"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/uploadImg', (req, res)=>{
	console.log('aa');
	console.log(req.body);
	res.send({data:'success'});
})

app.get('/getList', (req, res)=>{
	res.send({data:'done'});
})
app.listen(4006, function () {
  console.log('Example app listening on port 4006!\n');
})