const catFactory = require("./task02.js");

function catsGroupGenerate(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(catFactory());
  }
  return result;
}

module.exports = catsGroupGenerate;
