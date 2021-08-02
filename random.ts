const multiply = (a: number, b: number) => a * b;
const divide = (a: number, b: number) => a / b;
const add = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;

const calculate = () => {
  const parsedFirstOperand = parseInt(state.firstOperand);
  const parsedSecondOperand = parseInt(state.secondOperand);
  let answer: number;
  switch (state.operation) {
    case "×":
      answer = multiply(parsedFirstOperand, parsedSecondOperand);
      setState((prevState) => ({
        ...prevState,
        secondOperand: answer.toString(),
        firstOperand: "0",
      }));
      break;
    case "÷":
      answer = divide(parsedFirstOperand, parsedSecondOperand);
      setState((prevState) => ({
        ...prevState,
        secondOperand: answer.toString(),
        firstOperand: "0",
      }));
      break;
    case "-":
      answer = subtract(parsedFirstOperand, parsedSecondOperand);
      setState((prevState) => ({
        ...prevState,
        secondOperand: answer.toString(),
        firstOperand: "0",
      }));
      break;
    case "+":
      answer = add(parsedFirstOperand, parsedSecondOperand);
      setState((prevState) => ({
        ...prevState,
        secondOperand: answer.toString(),
        firstOperand: "0",
      }));
      break;
    default:
  }
};
