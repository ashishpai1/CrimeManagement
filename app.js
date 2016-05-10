  var express = require('express');
  var app = express();
  var fs = require('fs');
  var path = require('path');
  var form = require("express-form");
  var bodyParser = require("body-parser")
  var mysql = require('mysql');

  var connection = mysql.createConnection({
    host     : 'CMPE226.cq3mlbpr1gah.us-west-1.rds.amazonaws.com',
    port     :  3306,
    user     : 'CMPE226Admin',
    password : 'CMPE226Admin',
    database : 'CMPE226'
  });
 
 connection.connect();
 
   
 // connection.end();


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

 // app.use(express.bodyParser());
  //app.use(app.router);

  app.use(express.static(path.join(__dirname, 'public')));

  app.listen(3007, function () {
    console.log('Example app listening on port 3000!');
  });


  app.get('/', function (req, res) {
      res.sendFile(path.join(__dirname + '/login.html'));
  });


  app.get('/index', function (req, res) {
      res.sendFile(path.join(__dirname + '/index.html'));
  });

  app.get('/analysis1', function (req, res) {
      res.sendFile(path.join(__dirname + 'partials/analysis1.html'));
  });

  app.post('/insertCriminal', function (req, res) {
     console.log(req.body.name);
      if (!req.body) {
        console.log(req);
        return res.sendStatus(400)
      }

    var query = "Insert into Criminal VALUES ('" + req.body.name + "','"+req.body.criminal_id+"','"+req.body.age+"','"+req.body.profession+"')";
    console.log(query);

    //  {"name":"Ashish vilas Pai","criminal_id":"11","age":"22","profession":"Good"}
    
     connection.query(query, function(err, rows, fields) {
          if (err) throw err;
              console.log('The solution is: ', rows[0]);
      });
      res.send( "Data Inserted : " +  JSON.stringify(req.body));
  });

  /*
// Crime transaction


Officer transaction
Insert into Officer VALUES ('Danny',1234,111);

Prison transaction
Insert into Prison VALUES (2,'Mexico',131);

*/

  app.post('/insertCrime', function (req, res) {
      //Insert into Officer VALUES ('Danny',1234,111);

      var currentDate = Date.now() /1000 | 0;
      // console.log(currentDate);
      if (!req.body) {
        console.log(req.body);
        return res.sendStatus(400)
      }
      var query = "Insert into Crime VALUES ('" + req.body.crime_id + "','"+ req.body.time +"','"+ req.body.profession +"','"+req.body.officer_id+"', '"+req.body.criminal_id+"')";
      console.log(query);
      connection.query(query, function(err, rows, fields) {
          if (err) throw err;
             // console.log('The solution is: ', rows[0]);
      });
      res.send( "Data Crime : " +  JSON.stringify(req.body));
  });


  app.post('/insertOfficer', function (req, res) {

     console.log(req.body.name);
      if (!req.body) {
        console.log(req);
        return res.sendStatus(400)
      }
      var query = "Insert into Officer VALUES ('" + req.body.officer_name + "','"+req.body.officer_id+"','"+req.body.crime_id+"')";
      console.log(query);
      connection.query(query, function(err, rows, fields) {
          if (err) throw err;
             // console.log('The solution is: ', rows[0]);
      });
      res.send( "Officer : " +  JSON.stringify(req.body));
  });

  app.post('/insertPrison', function (req, res) {
     console.log(req.body.name);
      if (!req.body) {
        console.log(req);
        return res.sendStatus(400)
      }
  
      var query = "Insert into Prison VALUES ('" + req.body.prison_id + "','"+req.body.prison_name+"','"+req.body.criminal_id+"')";
      console.log(query);
      connection.query(query, function(err, rows, fields) {
          if (err) throw err;
             // console.log('The solution is: ', rows[0]);
      });
      res.send( "Prison : " +  JSON.stringify(req.body));
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




