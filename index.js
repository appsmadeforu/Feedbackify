// Common js module
const express = require("express")

// First express app :) There could be several a apps in an express app but we use a single one.
// All routers will be associated to this app
const app = express()

app.get('/', (req, res)=> {
    res.send({sofiya: 'first mern app'})
});

// HEROKU will inject this environment variable
const PORT = process.env.PORT || 5000

app.listen(PORT);