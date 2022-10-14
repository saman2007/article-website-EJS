const jsonReader = require("./JSONReader");

const getNArticles = async (number) => {
  let articles = await jsonReader("articles.json");
  articles = articles.slice(0, number);

  const goodArticles = articles.map((data) => ({
    ...data,
    text: data.text.slice(0, 200) + "...",
  }));

  return goodArticles;
};

const getAllArticles = async () => {
  let articles = await jsonReader("articles.json");

  const goodArticles = articles.map((data) => ({
    ...data,
    text: data.text.slice(0, 200) + "...",
  }));

  return goodArticles;
};

const getSpecificArticle = async (url) => {
  let articles = await jsonReader("articles.json");

  let article = articles.find((data) => data.path === url);

  return article;
};

module.exports = { getNArticles, getAllArticles, getSpecificArticle };
