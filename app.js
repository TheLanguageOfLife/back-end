const express = require("express");
const app = express();
const db = require('./db');
const port = process.env.NODE_JS_PORT || 8080;

app.get("/", (req, res) => {
    res.send("Hello World")
});

app.listen(port, function () {
    console.log("listening on "+port+"!");
});
