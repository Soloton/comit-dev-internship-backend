const catsGroupGenerate = require("../task03");

const chai = require("chai");
chai.should();
chai.use(require("chai-things"));

describe("catsGroupGenerate default", function () {
  it("should return default values when given a default values", function () {
    const defaultCats = catsGroupGenerate(1);
    const catsGroupLength = Math.floor(Math.random() * 999);
    const catsGroup = catsGroupGenerate(catsGroupLength, defaultCats[0]);
    catsGroup.should.all.be.deep.equal(defaultCats[0]);
  });

  it("should return default values when given a abnormal default values", function () {
    let firstAbnormalCat = {};
    firstAbnormalCat.name = "";
    firstAbnormalCat.age = -1;
    firstAbnormalCat.gender = "котЭ";
    firstAbnormalCat.legsCount = -1;
    firstAbnormalCat.tailLength = -1;
    firstAbnormalCat.loudness = -1;
    const catsGroupLength = Math.floor(Math.random() * 999);
    const catsGroup = catsGroupGenerate(catsGroupLength, firstAbnormalCat);
    catsGroup.should.all.be.deep.equal(firstAbnormalCat);
  });
});

describe("catsGroupGenerate", function () {
  let catsGroup;
  let catsGroupLength;

  before(function () {
    catsGroupLength = Math.floor(Math.random() * 999);
    catsGroup = catsGroupGenerate(catsGroupLength);
  });

  it("should return an array of length as " + catsGroupLength, function () {
    catsGroup.should.be.an("array");
    catsGroup.length.should.to.be.equal(catsGroupLength);
  });
});
