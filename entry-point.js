require("regenerator-runtime/runtime");
require("@babel/register");

const catsGroupGenerate = require("./task03");

for (let cat of catsGroupGenerate(10)) {
  console.log(cat);
}
