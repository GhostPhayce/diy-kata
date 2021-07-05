const { joinNames } = require("../src");

describe("joinNames", () => {
  const simpsonsArray = [
    { name: "Bart" },
    { name: "Lisa" },
    { name: "Maggie" }
  ];
  const familyArray = [
    { name: "Tom" },
    { name: "Rach" },
    { name: "Nat" },
    { name: "Jake" },
    { name: "Geoff" }
  ];

  it("returns string of names, seperated by commas and an ampersand from the simpsonsArray", () => {
    expect(joinNames(simpsonsArray)).toBe("Bart, Lisa & Maggie");
  });

  it("returns string of names, seperated by commas and an ampersand from the familyArray", () => {
    expect(joinNames(familyArray)).toBe("Tom, Rach, Nat, Jake & Geoff");
  });
});