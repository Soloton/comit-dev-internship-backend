const catFactory = require("./task02.js");

function* catsGroupGenerate(n) {
  let index = 0;
  while (index++ <= n) {
    yield catFactory();
  }
}

module.exports = catsGroupGenerate;
