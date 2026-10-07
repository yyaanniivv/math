export type Action = "+" | "-" | "x" | "*" | ":";

export const calculate = (a: number, b: number, action: Action): number => {
  switch (action) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "x":
    case "*":
      return a * b;
    case ":":
      return b !== 0 ? a / b : NaN;
  }
};