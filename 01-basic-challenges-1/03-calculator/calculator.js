function calculator(num1, num2, operand) {
  if (operand === "+") {
    return num1 + num2;
  } else if (operand === "-") {
    return num1 - num2;
  } else if (operand === "*") {
    return num1 * num2;
  } else if (operand === "/") {
    return num1 / num2;
  }
}

module.exports = calculator;
