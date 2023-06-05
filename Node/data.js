// const { Pool, Client } = require('pg')
// const express = require("express");
// const bodyParser = require('body-parser');
// const cors = require("cors");
 
// const app = express();
 
// app.use(cors());
// // parse application/json
// app.use(bodyParser.json());
  
// //create database connection
// const conn = new Client({
//     host: "localhost",
//     port: 5432,
//     user: 'dsapoval422',
//     password: "user-3336",
//     database: "product-delivery"
// })
 
// //connect to database
// conn.connect();


 
// //add new user
// app.post('/cart-data',(req, res) => {
//     let data = {name: req.body.name};
//     let sql = "INSERT INTO users SET ?";
//     let query = conn.query(sql, data,(err, results) => {
//         if(err) throw err;
//         res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//     });
// });
 
// app.listen(3001, () => {
//     console.log("Server running successfully on 3001");
// });