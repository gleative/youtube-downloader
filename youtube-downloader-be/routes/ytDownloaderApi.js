let express = require('express');
let router = express.Router();

let fs = require('fs');
let youtubedl = require('youtube-dl');

router.get('/', function (req, res, nextFunc) {
  res.send(`Hei hei`);
});

// For å kjøre denne http request, så må url være "localhost:9000/ytdownloaderApi"
router.post('/', function (req, res, nextFunc) {
  const url = req.body.url;
  var videoName = 'what';

  console.log('VALUE: ', url);

  const video = youtubedl(url, ['--format=18'], {
    cwd: __dirname,
  });

  video.on('info', function (info) {
    console.log('Download started');

    videoName = info._filename; // * Får ikke til å assign navn....

    console.log('filename: ', info._filename);
    console.log('size: ', info.size);
  });

  video.pipe(fs.createWriteStream(videoName + '.mp3'));

  // TODO: Slett videon etterpå

  // res.send(`I received your POST request: ${req.body.url}`); // Bruk denne til å sende tilbake yt video????
});

// Export - Se "TESTAPI.js" for eksempel
module.exports = router;
