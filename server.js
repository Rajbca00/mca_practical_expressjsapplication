const express = require("express");
const path = require("path");
var bodyParser = require("body-parser");

let app = express();

//task array to store data temporarily
var task = ["buy socks", "practise with nodejs"];
var complete = ["finish jquery"];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { task: task, complete: complete });
});

app.post("/addtask", (req, res) => {
  var newTask = req.body.newtask;
  task.push(newTask);
  res.redirect("/");
});

app.post("/removetask", function (req, res) {
  var completeTask = req.body.check;
  complete.push(completeTask);
  task.splice(task.indexOf(completeTask), 1);
  res.redirect("/");
});

app.listen(3000, () => console.log("Server is running"));