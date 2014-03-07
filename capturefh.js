var page = require('webpage').create();
page.open('https://www.fh-brandenburg.de/', function() {
  page.render('fh.png');
  phantom.exit();
});