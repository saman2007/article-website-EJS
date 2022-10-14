const express = require("express");

const jsonReader = require("../helpers/JSONReader");

const router = express.Router();

router.get("/about-me", async (req, res) => {
  const aboutMe = await jsonReader("aboutMe.json");

  res.renderConfig = {
    title: "about me",
    ...aboutMe,
    ...res.renderConfig,
  };

  res.render("about-me", res.renderConfig);
});

module.exports = router;
