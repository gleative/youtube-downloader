let express = require('express');
let router = express.Router();

// Når URL er / (root), så kjøres denne!
// ! NB -> funket med `function` keyword, og ikke arrow function
router.get('/', function (request, response, nextFunc) {
  response.send('API IS WORKING');
});

// Export module so other files can use
module.exports = router;
