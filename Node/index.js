const { Pool, Client } = require('pg')
const express = require("express");
const cors = require("cors")
const PORT = process.env.PORT || 3001;
const app = express();
let productObj
let test

const client = new Client({
    host: "localhost",
    port: 5432,
    user: 'dsapoval422',
    password: "user-3336",
    database: "product-delivery"
})

app.use(cors())
app.use(express.json())

client.connect()

client.query('Select * from mcdonalds', (error, res) => {
    if (!error) {
        productObj = res.rows;
        // console.log(productObj);
        app.get("/api", (req, res ) =>{
           res.json(productObj)
        })
       
        
    }
    else {
        console.log(error.message);
    }
    client.end()
})
app.post('/cart-data',(req, res) => {
    // let data = {name: req.params.name};
    // let sql = "INSERT INTO cart SET ?";
    // let query = conn.query(sql, data,(err, results) => {
    //     if(err) throw err;
    if(!req.body) return res.sendStatus(400);
    if(req.body == []){
        console.log(false);
    }
    else{
        console.log(req.body);
    }
    // res.send(`${req.body.userName} - ${req.body.name}`);
        // res.json(data);
    // });
});
app.listen(PORT, () => {
    console.log(`Connected in port ${PORT}`);
  });
