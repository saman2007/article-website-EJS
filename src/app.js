const path = require("path");

const express = require("express");

const jsonReader = require("./helpers/JSONReader");
const homeRoute = require("./routes/HomePageRoute");
const articlesRoute = require("./routes/ArticlesPageRoute");
const aboutMeRoute = require("./routes/AboutMePageRoute");

const server = express();

server.use(express.static(path.resolve(__dirname, "public")));

server.set("view engine", "ejs");
server.set("views", path.resolve(__dirname, "views"));

server.use(async (req, res, next) => {
  const menu = await jsonReader("menu.json");
  
  res.renderConfig = { menu, url: req.url };

  next();
});

server.use(homeRoute);
server.use(articlesRoute);
server.use(aboutMeRoute);

server.get("/not-found", (req, res) => {
  res.renderConfig.notFound = true;
  res.renderConfig.title = "page not found";

  res.render("404", res.renderConfig);
});

server.use((req, res) => {
  res.redirect("/not-found")
})

server.listen(process.env.PORT || 3000);
