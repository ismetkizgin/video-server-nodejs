const express = require('express');
const router = express();
const fs = require('fs');

router.get('/', async function (req, res) {
    let videoFileNames = fs.readdirSync('public/assets/videos/');
    for (let i = 0; i < videoFileNames.length; i++) {
        videoFileNames[i] = videoFileNames[i].replace('.mp4', '');
    }

    res.render('index', {
        videoFileNames,
        defaultVideo: {
            src: `http://${req.headers.host}/stream/${videoFileNames[0]}`,
            name: videoFileNames[0]
        }
    });
});

module.exports = router;