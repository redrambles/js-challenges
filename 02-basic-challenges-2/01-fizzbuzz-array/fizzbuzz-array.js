function fizzBuzzArray(target) {
  const result = [];

  for (let num = 1; num <= target; num++) {
    if (num % 5 == 0 && num % 3 == 0) {
      result.push("FizzBuzz");
    } else if (num % 5 == 0) {
      result.push("Buzz");
    } else if (num % 3 == 0) {
      result.push("Fizz");
    } else {
      result.push(num);
    }
  }

  return result;
}

module.exports = fizzBuzzArray;
