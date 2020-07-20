
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.send("404 NOT FOUND");
})

module.exports = app;