const task04 = require("../task04");
const catsGroupGenerate = require("../task03");
require("chai").should();

describe("task04", function () {
  let catsGroup, catsGroupLength;

  before(function () {
    catsGroupLength = Math.floor(Math.random() * 999);
    catsGroup = catsGroupGenerate(catsGroupLength);
  });

  describe("task04.getMaleCats", function () {
    let maleCats;
    before(function () {
      maleCats = task04.getMaleCats(catsGroup);
    });

    it("should return an array of objects whose length must be less than or equal to the length of the cats array.", function () {
      maleCats.should.be.an("array");
      maleCats.length.should.be.lessThanOrEqual(catsGroupLength);
    });

    it("should return an array of objects whose gender property is 'кот'", function () {
      for (let maleCat of maleCats) {
        maleCat.should.be.an("object");
        maleCat.gender.should.to.be.equal("кот", "male cat must be a 'кот'");
      }
    });
  });

  describe("task04.getCatsNames", function () {
    let catsNames;
    before(function () {
      catsNames = task04.getCatsNames(catsGroup);
    });

    it("should return an array of string whose length must be less than or equal to the length of the cats array.", function () {
      catsNames.should.be.an("array");
      catsNames.length.should.be.lessThanOrEqual(catsGroupLength);
    });

    it("should return an array of not empty strings whose gender property is exists in original array of objects", function () {
      for (let catName of catsNames) {
        catName.should.be.an("string");
        catName.should.not.be.empty;
      }

      const catsNamesSet = new Set(catsNames);

      for (let cat of catsGroup) {
        catsNamesSet.should.contain(
          cat.name,
          `original array should contain ${cat.name}`
        );
      }
    });
  });

  describe("task04.getOldestMaleCatsNames", function () {
    let oldestMaleCatsNames,
      oldestMaleCatsNamesCount,
      expectedArray,
      expectedArrayLength;

    before(function () {
      oldestMaleCatsNamesCount = Math.floor(Math.random() * catsGroupLength);
      oldestMaleCatsNames = task04.getOldestMaleCatsNames(
        catsGroup,
        oldestMaleCatsNamesCount
      );

      expectedArray = catsGroup
        .filter((x) => x.gender === "кот")
        .sort((a, b) => b.age - a.age);

      expectedArrayLength = Math.min(
        expectedArray.length,
        oldestMaleCatsNamesCount
      );
    });

    it("should return an array whose length must be less than or equal to the length of the cats array", function () {
      oldestMaleCatsNames.should.be.an("array");
      oldestMaleCatsNames.length.should.be.lessThanOrEqual(catsGroupLength);
    });

    it("should return an array whose length must be equal to the requested number", function () {
      oldestMaleCatsNames.length.should.to.be.equal(
        expectedArrayLength,
        "the returned quantity is not equal to the requested quantity"
      );
    });

    it("should return an array of cat names, sorted in descending order of age", function () {
      for (let i = 0; i < expectedArrayLength; i++) {
        oldestMaleCatsNames[i].should.to.equal(
          expectedArray[i].name,
          `on ${
            i + 1
          }/${expectedArrayLength} loop iteration. ${catsGroupLength}`
        );
      }
    });
  });

  describe("task04.getYoungestFemaleCatsNames", function () {
    let youngestFemaleCatsNames,
      youngestFemaleCatsNamesCount,
      expectedArray,
      expectedArrayLength;

    before(function () {
      youngestFemaleCatsNamesCount = Math.floor(
        Math.random() * catsGroupLength
      );
      youngestFemaleCatsNames = task04.getYoungestFemaleCatsNames(
        catsGroup,
        youngestFemaleCatsNamesCount
      );

      expectedArray = catsGroup
        .filter((x) => x.gender === "кошка")
        .sort((a, b) => a.age - b.age);

      expectedArrayLength = Math.min(
        expectedArray.length,
        youngestFemaleCatsNamesCount
      );
    });

    it("should return an array whose length must be less than or equal to the length of the cats array", function () {
      youngestFemaleCatsNames.should.be.an("array");
      youngestFemaleCatsNames.length.should.be.lessThanOrEqual(catsGroupLength);
    });

    it("should return an array whose length must be equal to the requested number", function () {
      youngestFemaleCatsNames.length.should.to.be.equal(
        expectedArrayLength,
        "the returned quantity is not equal to the requested quantity"
      );
    });

    it("should return an array of cat names, sorted in ascending order of age", function () {
      for (let i = 0; i < expectedArrayLength; i++) {
        youngestFemaleCatsNames[i].should.to.equal(
          expectedArray[i].name,
          `on ${
            i + 1
          }/${expectedArrayLength} loop iteration. ${catsGroupLength}`
        );
      }
    });
  });
});
