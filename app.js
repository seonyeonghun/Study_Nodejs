const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const { response } = require("express");

const app = express();

const items = [
  {
    name: "우유",
    price: "2000",
  },
  {
    name: "홍차",
    price: "5000",
  },
  {
    name: "커피",
    price: "4500",
  },
];
app.set("port", process.env.PORT || 3000);
app.set("localhost", "127.0.0.1");

// static file
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "pug");

app.get("/", (req, res) => {
  //console.log(req.url, req.headers);
  res.render("index", {
    title: "pug index",
    message: "welcome to visit",
  });
  //res.sendFile(path.join(__dirname, "/index.html"));
  //   res.send("hello, express server"); // .write()대신
});

app.get("/main", (req, res) => {
  //console.log(req.url, req.headers);
  res.render("index", {
    title: "pug main",
    message: "welcome to visit",
  });
  //res.sendFile(path.join(__dirname, "/index.html"));
  //   res.send("hello, express server"); // .write()대신
});

app.get("/form", (req, res) => {
  res.render("email", {
    title: "email post",
    message: "welcome to email post",
    desc: "nodejs + email post test page",
  });
});

app.post("/email_post", (req, res) => {
  let input_email = req.body.email;
  res.render("receive", {
    title: "email post result",
    message: "you just send email address by POST protocol!",
    desc: "see your result, isn't cool?!",
    received_email: input_email,
  });
});

app.post("/ajax_send_email", (req, res) => {
  console.log(req.body);
  var responseData = {
    result: "ok",
    email: req.body.email,
  };
  res.json(responseData);
});

app.all("/data.html", (req, res) => {
  var output = "";
  output += "<!doctype html>";
  output += "<html lang=ko>";
  output += "<head><title>response data</title><meta charset=utf-8></head>";
  output += "<body>";
  items.forEach((item) => {
    output += "<div>";
    output += "<h1>" + item.name + "</h1>";
    output += "<p>" + item.price + "</p>";
    output += "</div>";
  });
  output += "</body></html>";
  res.send(output);
});

app.all("/data.xml", (req, res) => {
  var output = "";
  output += '<?xml version="1.0", encoding="utf-8" ?>';
  output += "<products>";
  items.forEach((item) => {
    output += "<product>";
    output += "<name>" + item.name + "</name>";
    output += "<price>" + item.price + "</price>";
    output += "</product>";
  });
  output += "</products>";
  res.type("text/xml");
  res.send(output);
});

app.all("/data.json", (req, res) => {
  res.send(items);
});

app.get("/parameter/:name/:region", (req, res) => {
  const name = req.params.name;
  const region = req.params.region;
  console.log(req.params.name);
  res.send("<h1>" + name + " : " + region + "</h1>");
});

app.listen(app.get("port"), app.get("localhost"), () => {
  console.log("server is listening...");
});

//로거 미들웨어
app.use(logger("dev"));

// 에러처리 미들웨어
// app.use((error, req, res, next) => {
//   res.status(404).send("404 not found error!");
// });
