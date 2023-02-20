'use strict';

const express = require('express');
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use("/public", express.static(path.join(__dirname, "public")));


// routes
app.use('/', require('./routes/profile')());

// start server
const server = app.listen(port);
console.log('Express started. Listening on %s', port);
