const humanCatDogYears = number => {
  let catAge;
  let dogAge;

  if (number === 0) {
    catAge = 0;
    dogAge = 0;
  }
  if (number === 1) {
    catAge = 15;
    dogAge = 15;
  }
  if (number === 2) {
    catAge = 15 + 9;
    dogAge = 15 + 9;
  }
  if (number >= 3) {
    const multiplier = number - 2;
    catAge = 15 + 9 + 4 * multiplier;
    dogAge = 15 + 9 + 5 * multiplier;
  }
  return [number, catAge, dogAge];
};

module.exports = humanCatDogYears;
