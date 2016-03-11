var express = require('express');
var stormpath = require('express-stormpath');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.use(stormpath.init(app, {
  web: {
    produces: ['application/json']
  }
}));

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
  app.listen(3000);
});