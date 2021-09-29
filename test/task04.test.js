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
});
