// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/timestamp/', (req, res) => {
  res.send({ 'unix': Date.now(), 'utc': Date() });
})

app.get('/api/timestamp/:date_string', (req, res) => {
  let date_string = req.params.date_string;

  const regex = /\d{5,}/;

  if (regex.test(date_string)) {
    let dateObj = new Date(date_string * 1000)
    res.send({ "unix": date_string, "utc": dateObj.toUTCString() })
  }

  let dateObj = new Date(date_string)

  if (!isNaN(dateObj)) {
    res.send({ "unix": dateObj.valueOf(), "utc": dateObj.toUTCString() })
  } else {
    res.send({ "error": "Invalid Date" })
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('App listening on port 3000!');
});