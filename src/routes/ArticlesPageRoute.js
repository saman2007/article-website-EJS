const express = require("express");

const router = express.Router();

const articles = require("../helpers/Articles");

router.get("/articles", async (req, res) => {
  res.renderConfig.title = "articles";
  res.renderConfig.articles = await articles.getAllArticles();
  res.renderConfig.articlesPage = true;

  res.render("articles", res.renderConfig);
});

router.get("/articles/:path", async (req, res, next) => {
  const article = await articles.getSpecificArticle(req.path);

  if (!article) return next();

  res.renderConfig.title = article.title;
  res.renderConfig.article = article;
  res.renderConfig.url = "/articles/:path";

  res.render("article", res.renderConfig);
});

module.exports = router;
