'use strict';

const express = require('express');
const taskRoute = require ('./routes/taskRoute');
const mongoose = require("mongoose");
require('dotenv').config()

// Constants
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const mongoUrl = process.env.MONGODB_URI;

const app = express();

mongoose.connect(
    mongoUrl,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

//Start DB
const db = mongoose.connection;
db.on("error", console.error.bind(console,
    "connection error: "));
db.once("open", function () {
    console.log("DB Connected successfully");
});

//Check backend server health
app.get('/health-status', (req, res) => {
    res.send('Backend server online.');
});

//Routes Definition.
app.use('/v1', taskRoute);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);