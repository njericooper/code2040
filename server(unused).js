"use strict";

var express = require("express");

var bodyParser = require("body-parser");

var app = express();

app.use(express.static("code2040"));

//parse application/json requests

app.use(bodyParser.json());

//start server

var server = app.listen(5000, function()
{
    console.log("listening on port " + server.address().port);
})
