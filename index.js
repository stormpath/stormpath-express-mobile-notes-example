var express = require('express')
var stormpath = require('express-stormpath')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(stormpath.init(app, {
	expand: {
    customData: true,
  },
  web: {
    produces: ['application/json']
  }
}))

// Main page with basic documentation for users. 
app.get('/', function(req, res) {
	var page = "<h1>Stormpath Notes</h1><p>A note taking app's backend.</p>"
	page += "<h2>Endpoints:</h2><p><em>All endpoints require authentication. Exposes the Stormpath Framework API for mobile clients. </em></p>"
	page += '<h3>GET /notes</h3><p>Returns a json object like {"notes": "The notes the user saved"}</p>'
	page += '<h3>POST /notes</h3><p>Takes a json object of {"notes": "The new notes the user wants to save"} and saves it to the user.</p>'
	page += '<p>Returns a blank page with 200 OK if successful, or 400 if the request was malformed.</p>'
	res.send(page)
})

// Endpoint for getting a user's notes. 
app.get('/notes', stormpath.apiAuthenticationRequired, function(req, res) {
	res.json({notes: req.user.customData.notes || "This is your notebook. Edit this to start saving your notes!"})
})

// Endpoint for retrieving a user's notes. 
app.post('/notes', stormpath.apiAuthenticationRequired, function(req, res) {
	if(!req.body.notes || typeof req.body.notes != "string") {
		res.status(400).send("400 Bad Request")
	}

	req.user.customData.notes = req.body.notes
	req.user.customData.save()
	res.status(200).end()
})

// Once Stormpath has initialized itself, start your web server!
app.on('stormpath.ready', function () {
  app.listen(process.env.PORT || 3000)
})