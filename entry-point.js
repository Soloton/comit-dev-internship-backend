require("regenerator-runtime/runtime");
require("@babel/register");

const catsGroupGenerate = require("./task03");
const nameStats = require("./task05");

const list = catsGroupGenerate(999);

console.log(nameStats(list));
