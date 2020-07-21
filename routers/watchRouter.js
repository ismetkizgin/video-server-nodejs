const express = require('express');
const path = require('path');
const router = express();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/views/index.html'))
});

module.exports = router;