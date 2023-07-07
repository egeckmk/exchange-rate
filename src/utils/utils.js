import Decimal from "decimal.js";

export const trueCalculate = (operator, num1, num2) => {
  const x = new Decimal(num1);
  const y = new Decimal(num2);
  switch (operator) {
    case "+":
      return x.sum(y).toFixed();
    case "-":
      return x.sub(y).toFixed();
    case "*":
      return x.mul(y).toFixed();
    case "/":
      return x.div(y).toFixed();
  }
  return 0;
};
