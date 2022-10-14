const fs = require("fs/promises");
const path = require("path");

const jsonReader = async (jsonFileName) => {
  const jsonPath = path.resolve(__dirname, "../", "data", jsonFileName);

  const json = await fs.readFile(jsonPath, { encoding: "utf8" });

  return JSON.parse(json);
};

module.exports = jsonReader;
