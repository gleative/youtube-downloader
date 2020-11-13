let express = require('express');
let router = express.Router();

router.get('/', function (req, res, nextFunc) {
  res.send(`Hei hei`);
});

// For å kjøre denne http request, så må url være "localhost:9000/ytdownloaderApi"
router.post('/', function (req, res, nextFunc) {
  const url = req.body;

  console.log('VALUE: ', url);
  res.send(`I received your POST request: ${req.body.url}`); // Bruk denne til å sende tilbake yt video????
});

// Export - Se "TESTAPI.js" for eksempel
module.exports = router;
