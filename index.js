// Common js module
const express = require("express")
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

// First express app :) There could be several a apps in an express app but we use a single one.
// All routers will be associated to this app
const app = express()

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // last our cookie for 30 days
        keys: [keys.cookieKey] // Encrypts the cookie we pass
    })
)

app.use(passport.initialize());
app.use(passport.session());

// auth routes file will return a function and we pass app object to the function
require('./routes/authRoutes')(app)

if (process.env.NODE_ENV == 'production') {
    app.use(express.static('client/build'))
}

// HEROKU will inject this environment variable
const PORT = process.env.PORT || 5000

app.listen(PORT);