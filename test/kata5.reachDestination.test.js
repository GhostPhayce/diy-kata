const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival 44/10", () => {
    expect(reachDestination(44, 10)).toBe("I should be there in 4.5 hours.");
  });
  it("returns string with estimated time of arrival 73/10", () => {
    expect(reachDestination(73, 10)).toBe("I should be there in 7.5 hours.");
  });
  it("returns string with estimated time of arrival 186/17", () => {
    expect(reachDestination(186, 17)).toBe("I should be there in 11 hours.");
  });
  it("returns string with estimated time of arrival 620/54", () => {
    expect(reachDestination(620, 54)).toBe("I should be there in 11.5 hours.");
  });
});
