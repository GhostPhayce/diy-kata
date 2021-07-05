const { humanCatDogYears } = require("../src");

describe("returns human, cat and dog years from a number", () => {
  it("returns [0, 0, 0] when passed 0", () => {
    expect(humanCatDogYears(0)).toEqual([0, 0, 0]);
  });
  it("returns the ages of cats and dogs compared to 1 human year", () => {
    expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
  });
  it("returns the ages of cats and dogs compared to 2 human years", () => {
    expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
  });
  it("returns the ages of cats and dogs compared to 3 human years", () => {
    expect(humanCatDogYears(3)).toEqual([3, 28, 29]);
  });
  it("returns the ages of cats and dogs compared to 10 human years", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
  });
  it("returns the ages of cats and dogs compared to 14 human years", () => {
    expect(humanCatDogYears(14)).toEqual([14, 72, 84]);
  });
});
