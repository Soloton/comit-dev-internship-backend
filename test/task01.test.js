const pick = require("../task01");
let faker;
faker = require("faker/locale/ru");
require("chai").should();

describe("pick", function () {
  it("should return one of given values", function () {
    const fakeCats = [];
    const catCount = faker.datatype.number({min: 2, max: 5});
    for (let i = 0; i < catCount; i++) {
      fakeCats.push(generateFakeCat());
    }
    const pickedCat = pick(fakeCats);
    fakeCats.should.contain(pickedCat);
  });
});

function generateFakeCat() {
  return {
    name: faker.name.firstName(),
    age: faker.datatype.number({ min: 1, max: 9 }),
    gender: faker.datatype.number(1) ? "кот" : "кошка",
    legsCount: faker.datatype.number({ min: 3, max: 4 }),
    tailLength: faker.datatype.number({ min: 0, max: 3 }),
  };
}
