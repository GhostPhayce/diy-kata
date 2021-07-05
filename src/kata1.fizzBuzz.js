const fizzBuzz = number => {
  const isDivisableBy3 = number % 3 === 0;
  const isDivisableby5 = number % 5 === 0;

  if (isDivisableBy3 && isDivisableby5) {
    return "FizzBuzz";
  }
  if (isDivisableBy3) {
    return "Fizz";
  }
  if (isDivisableby5) {
    return "Buzz";
  }
  return number;
};

module.exports = fizzBuzz;
