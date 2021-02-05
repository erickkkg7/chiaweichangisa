const utils = require('./public/COMP4537/labs/4/getDate/modules/utils');
const url = require('url');
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.get("/COMP4537/labs/4/getDate", (req, res) => {
  const q = url.parse(req.url, true);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(
    `<p>Hello ${
      q.query.name
    }, Here is the server's current date and time: ${utils.getDate()}</p>`
  );
});

app.listen(port);
