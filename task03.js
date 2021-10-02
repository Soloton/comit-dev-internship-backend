const catFactory = require("./task02.js");

function catsGroupGenerate(n, defaults = {}) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(catFactory(defaults));
  }
  return result;
}

module.exports = catsGroupGenerate;
