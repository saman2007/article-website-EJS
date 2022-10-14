const express = require("express");

const router = express.Router();

const articles = require("../helpers/Articles");

router.get("/", async (req, res) => {
  const featuredArticles = await articles.getNArticles(3);

  res.renderConfig.title = "home";
  res.renderConfig.articles = featuredArticles;

  res.render("home", res.renderConfig);
});

module.exports = router;
