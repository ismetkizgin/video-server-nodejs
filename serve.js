const path = require('path');
const express = require('express');
const app = express();
const routers = require('./routers');

app.use(express.static(path.join(__dirname, 'public')));

app.use(routers.streamRouter);

app.use((req, res, next) => {
    res.status(404).send("404 NOT FOUND");
})

module.exports = app;