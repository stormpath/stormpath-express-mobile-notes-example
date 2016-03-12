var express = require('express');
var stormpath = require('express-stormpath');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use(stormpath.init(app, {
  web: {
    produces: ['application/json']
  }
}));

app.get('/', function(req, res) {
	var page = "<h1>Stormpath Notes</h1><p>A note taking app's backend.</p>"
	page += "<h2>Endpoints:</h2><p><em>All endpoints require authentication.</em></p>"
	page += '<h3>GET /notes</h3><p>Returns a json object like {"notes": "The notes the user saved"}</p>'
	page += '<h3>POST /notes</h3><p>Takes a json object of {"notes": "The new notes the user wants to save"} and saves it to the user.</p>'
	page += '<p>Returns a blank page with 200 OK if successful.'
	res.send(page)
})

app.get('/notes', stormpath.loginRequired, function(req, res) {
	res.json(req.user.customData.notes);
})

app.post('/notes', stormpath.loginRequired, function(req, res) {
	var notes = req.body.notes;
	req.user.customData.notes = notes;
	req.user.save();
	res.send("success")
})

// Once Stormpath has initialized itself, start your web server!
app.on('stormpath.ready', function () {
  app.listen(process.env.PORT || 3000);
});