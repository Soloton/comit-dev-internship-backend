const catFactory = require("../task02");
require("chai").should();

describe("catFactory default", function () {
  it("should return default values when given a default values", function () {
    const defaultCat = catFactory();
    const cat = catFactory(defaultCat);
    cat.should.to.deep.equal(defaultCat);
  });

  runCatFactoryCorrectTest("with normal default", catFactory());

  runCatFactoryCorrectTest("with empty default", {});

  let firstAbnormalCat = {};
  firstAbnormalCat.name = "";
  firstAbnormalCat.age = -1;
  firstAbnormalCat.gender = "котЭ";
  firstAbnormalCat.legsCount = -1;
  firstAbnormalCat.tailLength = -1;
  runCatFactoryIncorrectTest(
    "with first abnormal default cat",
    firstAbnormalCat
  );

  let secondAbnormalCat = {};
  secondAbnormalCat.name = "";
  secondAbnormalCat.age = 20;
  secondAbnormalCat.gender = "котЭ";
  secondAbnormalCat.legsCount = 5;
  secondAbnormalCat.tailLength = 4;
  runCatFactoryIncorrectTest(
    "with second abnormal default cat",
    secondAbnormalCat
  );
});

function runCatFactoryCorrectTest(title, defaults = {}) {
  describe(title, function () {
    let cat;

    before(function () {
      cat = catFactory(defaults);
    });

    it("should return an object", function () {
      cat.should.be.an("object");
    });

    it("should return an object that has expected properties", function () {
      for (const property of [
        "name",
        "age",
        "gender",
        "legsCount",
        "tailLength",
      ]) {
        cat.should.to.have.property(property);
      }
    });

    it("should return a cat with the name property as a non-empty string", function () {
      cat.name.should.be.a("string");
      cat.name.should.not.be.empty;
    });

    it("should return a cat with the gender property as a non-empty string", function () {
      cat.gender.should.be.a("string");
      cat.gender.should.not.be.empty;
    });

    it("should return the gender of the cat as 'кот' or 'кошка'", function () {
      ["кот", "кошка"].should.include(cat.gender);
    });

    it("should return burn cat", function () {
      cat.age.should.to.be.a("number");
      cat.age.should.satisfy(
        (age) => age <= 9 && age >= 0,
        "the age is abnormal"
      );
    });

    it("should return a cat with a valid legsCount property", function () {
      cat.legsCount.should.to.be.a("number");
      cat.legsCount.should.to.be
        .greaterThanOrEqual(0, "too few legs count")
        .and.lessThanOrEqual(4, "too many legs count");
    });

    it("should return a cat with a valid tailLength property", function () {
      cat.tailLength.should.to.be.a("number");
      cat.tailLength.should.to.be
        .greaterThanOrEqual(0, "too few tail lengths")
        .and.lessThanOrEqual(3, "too many tail lengths");
    });
  });
}

function runCatFactoryIncorrectTest(title, defaults = {}) {
  describe(title, function () {
    let cat;

    before(function () {
      cat = catFactory(defaults);
    });

    it("should return an object", function () {
      cat.should.be.an("object");
    });

    it("should return a cat with the name property as a empty string", function () {
      cat.name.should.be.a("string");
      cat.name.should.be.empty;
    });

    it("should return the gender of the cat not as 'кот' or 'кошка'", function () {
      ["кот", "кошка"].should.not.include(cat.gender);
    });

    it("should return dead cat", function () {
      cat.age.should.to.be.a("number");
      cat.age.should.satisfy(
        (age) => age < 0 || age > 9,
        "the age is abnormal"
      );
    });

    it("should return a cat with a invalid legsCount property", function () {
      cat.legsCount.should.to.be.a("number");
      cat.legsCount.should.satisfy(
        (legsCount) => legsCount < 0 || legsCount > 4,
        "the legs count is abnormal"
      );
    });

    it("should return a cat with a invalid tailLength property", function () {
      cat.tailLength.should.to.be.a("number");
      cat.tailLength.should.satisfy(
        (tailLength) => tailLength < 0 || tailLength > 3,
        "the tail is abnormal"
      );
    });
  });
}
