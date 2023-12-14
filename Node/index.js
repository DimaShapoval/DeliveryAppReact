const { Pool, Client } = require('pg');
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const app = express();
let productObj;

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: 'dsapoval422',
    password: "user-3336",
    database: "product-delivery"
});

app.use(cors());
app.use(bodyParser.json());

// take all items and info of items from db
app.get("/api", (req, res) => {
    pool.query('SELECT * FROM mcdonalds', (error, result) => {
        if (error) {
            console.error('Error executing query:', error.message);
            return res.status(500).json({ error: 'Internal server error' });
        }

        productObj = result.rows;
        res.json(productObj);
    });
});

// sign up post request
app.post('/sign-up', async (req, res) => {
    const { name, email, password } = req.body;
    const checkUserQuery = 'SELECT COUNT(*) FROM "clientInfo" WHERE email = $1';
    const checkUserResult = await pool.query(checkUserQuery, [email]);
    const userExists = checkUserResult.rows[0].count > 0;
    if (userExists) {
        // if user with this email exists send false
        return res.status(201).json(false);
    }
    const insertUserQuery = 'INSERT INTO "clientInfo" (name, email, password) VALUES ($1, $2, $3) RETURNING *';
    const insertUserResult = await pool.query(insertUserQuery, [name, email, password]);
    res.status(201).json({ success: true, message: `User added with ID: ${insertUserResult.rows[0].id}` });
});
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const checkUserQuery = 'SELECT * FROM "clientInfo" WHERE email = $1';
    const checkUserResult = await pool.query(checkUserQuery, [email]);
    const userInfo = checkUserResult.rows[0];
    if (userInfo.email == email && userInfo.password == password) {
        return res.status(201).json({ success: true, email: userInfo.email, name: userInfo.name})
    }
    else {
        res.status(201).json({ success: false })
    }
})

app.listen(PORT, () => {
    console.log(`Connected in port ${PORT}`);
});
