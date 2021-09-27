require("regenerator-runtime/runtime");
require("@babel/register");

const catsGroupGenerate = require("./task03");
const getMaleCats = require("./task04");

const list = catsGroupGenerate(999);

for (let cat of getMaleCats(list)) {
  console.log(cat);
}
