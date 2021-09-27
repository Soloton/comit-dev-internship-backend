require("regenerator-runtime/runtime");
require("@babel/register");

const catsGroupGenerate = require("./task03");
const nameStats = require("./task05");

const list = catsGroupGenerate(999, {name: 'Нехочуха'});

console.log(nameStats(list));

