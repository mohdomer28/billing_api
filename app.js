const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

mongoose.connect(
    process.env.DB_CONNECTION,
    () => {
        console.log('Connected to DB!');
    }
)

app.get('/', (req, res) => {
    res.send('Hello');
});
app.listen(3000);

