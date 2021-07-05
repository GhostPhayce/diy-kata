const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1]);
  });

  it("returns '[7, 3, 3, 1]' when passed '1337'", () => {
    expect(numberToReversedDigits(1337)).toEqual([7, 3, 3, 1]);
  });

  it("returns '[5, 9, 7, 8, 4, 5]' when passed '548795'", () => {
    expect(numberToReversedDigits(548795)).toEqual([5, 9, 7, 8, 4, 5]);
  });

});
