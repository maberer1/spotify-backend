// Dependencies
const express = require('express');
const app = express();
const cors = require('cors');
let URLSearchParams = require('URLSearchParams')
// const iceCreamController = require('./controllers/IceCream');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

var SpotifyWebApi = require('spotify-web-api-node');

// credentials
var spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    // netlify or heroku link?
    redirectUri: 'http://localhost:8000/callback' 
    // || 'https://' ?
});

// Redirect
app.get('/', function(req, res) {
	// res.redirect('https://accounts.spotify.com/authorize?' + URLSearchParams({

    // })');
});

// Controllers
// Forward all requests to localhost:8000/icecreams to the ice cream controller
// app.use('/icecreams', iceCreamController);

app.listen(8000, () => {
	console.log('Connected! Listening on port 8000.');
});