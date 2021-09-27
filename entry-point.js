require("regenerator-runtime/runtime");
require("@babel/register");

const catsGroupGenerate = require("./task03");
const task04 = require("./task04");

const list = catsGroupGenerate(999);

for (let cat of task04.getCatsNames(list)) {
  console.log(cat);
}
