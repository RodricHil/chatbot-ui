var express = require("express");
var path = require("path");
var app = express();
var port = 18080;

// define routes here..
app.use("/cssFiles", express.static(__dirname + "/public/assets"));
app.use("/imageFiles", express.static(__dirname + "/public/assets/images"));
app.use("/jsFiles", express.static(__dirname + "/public/assets/js"));

app.get("/", function (req, res) {
  res.sendFile("index.html", { root: path.join(__dirname, "/public") });
});

// app.get("/videoFlow", (req, res) => {
//     res.sendFile("./views/videoFlow.html", { root: __dirname });
// });

// app.get("/leadFlow", (req, res) => {
//     res.sendFile("./views/leadFlow.html", { root: __dirname });
// });

var server = app.listen(port, function () {
  console.log(`Node server is running at ${port}..`);
});
