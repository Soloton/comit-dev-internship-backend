const pick = require("./task01");

function catFactory(defaults = {}) {
  const names = [
    "Пульферия",
    "Ляжка",
    "Галоша",
    "Килька",
    "Шаверма",
    "Чумка",
    "Тяпка",
    "Панамка",
    "Веник",
    "Шпунтик",
    "Ворчун",
    "Вентик",
    "Нехочуха",
    "Отчебучка",
    "Бублик",
    "Гопник",
    "Клопик",
    "Шалопай",
  ];
  const ages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const loudnessVolumes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let genders = ["кот", "кошка"];
  let legs = [3, 4];
  let tailLengths = [0, 1, 2, 3];

  const result = {
    name: pick(names),
    age: pick(ages),
    gender: pick(genders),
    legsCount: pick(legs),
    tailLength: pick(tailLengths),
    loudness: pick(loudnessVolumes),
  };
  Object.assign(result, defaults);
  return result;
}

module.exports = catFactory;
