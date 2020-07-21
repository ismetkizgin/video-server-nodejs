const express = require('express');
const fs = require('fs');
const router = express();

router.get('/stream/:videoName', async (req, res) => {
	try {
		const resolution = req.params.resolution;
		const path = `public/assets/videos/${resolution}.mp4`;
		const stat = fs.statSync(path);
		const fileSize = stat.size;
		const range = req.headers.range;
		if (range) {
			const parts = range.replace(/bytes=/, "").split("-");
			const start = parseInt(parts[0], 10);
			const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
			const chunksize = (end - start) + 1;
			const file = fs.createReadStream(path, { start, end });
			const head = {
				'Content-Range': `bytes ${start}-${end}/${fileSize}`,
				'Accept-Ranges': 'bytes',
				'Content-Length': chunksize,
				'Content-Type': 'video/mp4',
			};
			res.writeHead(206, head);
			file.pipe(res);
		} else {
			const head = {
				'Content-Length': fileSize,
				'Content-Type': 'video/mp4',
			};
			res.writeHead(200, head);
			fs.createReadStream(path).pipe(res);
		}
	} catch (err) {
		res.status(400).send(err.message);
	}
});

module.exports = router;