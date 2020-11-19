let express = require('express');
let router = express.Router();

let fs = require('fs');
let youtubedl = require('youtube-dl');

converter.setFfmpegPath('/Users/glennch/Downloads/ffmpeg', function (err) {
  if (err) throw err;
});

router.get('/', function (req, res, nextFunc) {
  res.send(`Hei hei`);
});

// For å kjøre denne http request, så må url være "localhost:9000/ytdownloaderApi"
router.post('/', function (req, res, nextFunc) {
  const url = req.body.url;

  console.log('VALUE: ', url);

  const video = youtubedl(url, ['--format=18'], {
    cwd: __dirname,
  });

  video.on('info', function (info) {
    var videoInfo = {
      title: info.title,
      description: info.description,
      duration: info._duration_hms,
      uploader: info.uploader,
      thumbnail: info.thumbnail,
      size: info.size,
    };

    console.log('Download started');
    // console.log('INFO: ', info);
    console.log('filename: ', info.title);
    console.log('size: ', info.size);

    // Send video info (Funket ikke å assigne også gjøre det etter 'video.on' funksjonen, så bare sender inni her)
    res.send(videoInfo);
  });

  video.pipe(fs.createWriteStream('sound.mp3'));

  convertToMp3();

  // res.send(`I received your POST request: ${videoName}`);

  // TODO: Slett videon etterpå

  // res.send(`I received your POST request: ${req.body.url}`); // Bruk denne til å sende tilbake yt video????
});

router.post('/rename', function (req, res) {
  const newName = req.body.name;

  fs.rename(
    '/Users/glennch/Documents/Proggis/own-play/youtube-downloader/youtube-downloader-be/sound.mp3',
    '/Users/glennch/Documents/Proggis/own-play/youtube-downloader/youtube-downloader-be/' + newName + '.mp3',
    function (err) {
      if (err) console.log('API ERROR RENAME: ', err);
    }
  );

  res.send('RENAMED request ran!');
});

function convertToMp3() {
  // TODO: Bruk ffmpeg
}

// Export - Se "TESTAPI.js" for eksempel
module.exports = router;
