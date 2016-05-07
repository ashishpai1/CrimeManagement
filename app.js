  var express = require('express');
  var app = express();
  var fs = require('fs');
  var path = require('path');
  var form = require("express-form");
  var bodyParser = require("body-parser")
  var mysql = require('mysql');

  var connection = mysql.createConnection({
    host     : 'cq3mlbpr1gah.us-west-1.rds.amazonaws.com',
    port: 3306,
    user     : 'CMPE226Admin',
    password : 'CMPE226Admin',
    database : 'CMPE226'
  });
 
 // connection.connect();
 
 /* connection.query("Insert into Crime VALUES (111,'18-06-12','labourer',121,131)", function(err, rows, fields) {
        if (err) throw err;
            console.log('The solution is: ', rows[0].solution);
  });  */
 // connection.end();



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

 // app.use(express.bodyParser());
  //app.use(app.router);

  app.use(express.static(path.join(__dirname, 'public')));

  app.listen(3004, function () {
    console.log('Example app listening on port 3000!');
  });


  app.get('/', function (req, res) {
      res.sendFile(path.join(__dirname + '/login.html'));
  });


  app.get('/index', function (req, res) {
      res.sendFile(path.join(__dirname + '/index.html'));
  });



  app.post('/insertCriminal', function (req, res) {
     console.log(req.body.name);
      if (!req.body) {
        console.log(req);
        return res.sendStatus(400)
      }
  
       res.send('welcome, ' + JSON.stringify(req.body));
  });


  app.post('/insertCrime', function (req, res) {
     console.log(req.body.name);
      if (!req.body) {
        console.log(req);
        return res.sendStatus(400)
      }
      res.send('welcome, ' + JSON.stringify(req.body));
  });

  app.post('/insertOfficer', function (req, res) {
     console.log(req.body.name);
      if (!req.body) {
        console.log(req);
        return res.sendStatus(400)
      }
      
      res.send('welcome, ' + JSON.stringify(req.body));
  });

  app.post('/insertPrison', function (req, res) {
     console.log(req.body.name);
      if (!req.body) {
        console.log(req);
        return res.sendStatus(400)
      }
  
       res.send('welcome, ' + JSON.stringify(req.body));
  });

  app.get('/getAnalytics', function (req, res) {
  	fs.readFile(__dirname + "/public" + "/submission.csv",'utf8', function(err, result){
  		console.log(result);
  		var result = result.toString().split("\r\n");
    		result.shift();
    	 	console.log(result[0].split(",")[0]);	  	
    	  res.send(result);
  	  });  
  });




