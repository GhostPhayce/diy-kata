const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  const employees = [
    { name: "Tom", role: "CEO" },
    { name: "Rach", role: "Vice CEO" },
    { name: "Natalie", role: "Assistant CEO" },
    { name: "Miguel", role: "Porter" }
  ];

  it("returns the employee's role in the company", () => {
    expect(getEmployerRole("Tom", employees)).toEqual("CEO");
  });

  it("returns the employee's role in the company", () => {
    expect(getEmployerRole("Miguel", employees)).toEqual("Porter");
  });
});
