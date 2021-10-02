const nameStats = require("../task05");
const catsGroupGenerate = require("../task03");
require("chai").should();

describe("nameStats", () => {
  let catsGroup, catsGroupLength, theNameStats;

  before(() => {
    catsGroupLength = Math.floor(Math.random() * 999);
    catsGroup = catsGroupGenerate(catsGroupLength);
    theNameStats = nameStats(catsGroup);
  });

  it("should return an object", () => {
    theNameStats.should.to.be.a("object");
  });

  it(
    "should return an object in which the sum of the property values is" +
      catsGroupLength,
    () => {
      let theNameStatsValuesSum = 0;
      const values = Object.values(theNameStats);
      for (let value of values) {
        value.should.to.be.a("number");
        theNameStatsValuesSum += value;
      }

      theNameStatsValuesSum.should.to.be.equal(catsGroupLength, "is not");
    }
  );

  it("should return an array of not empty strings whose gender property is exists in original array of objects", () => {
    const catsNames = Object.keys(theNameStats);
    for (let catName of catsNames) {
      catName.should.be.an("string");
      catName.should.not.be.empty;
    }

    const catsNamesSet = new Set(catsNames);

    catsNamesSet.size.should.to.be.equal(
      catsNames.length,
      "returned array is not uncial"
    );

    for (let cat of catsGroup) {
      catsNamesSet.should.contain(
        cat.name,
        `original array should contain ${cat.name}`
      );
    }
  });
});
