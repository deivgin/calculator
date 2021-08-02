import Screen from "./components/Screen";
import Pad from "./components/Pad";
import { useEffect, useState } from "react";
import {
  Operand,
  Operator,
  Action,
  State,
  initialState,
} from "./components/model";

const actions: Action[] = ["=", "C", "."];
const numbers: Operand[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operations: Operator[] = ["×", "÷", "-", "+"];

const Calculator = () => {
  const [state, setState] = useState<State>(initialState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const setFirstOperand = (num: Operand) => {
    if (state.firstOperand === "0") {
      setState((prevState) => ({ ...prevState, firstOperand: num.toString() }));
    } else {
      setState((prevState) => ({
        ...prevState,
        firstOperand: state.firstOperand + num.toString(),
      }));
    }
  };

  const setSecondOperand = () => {
    setState((prevState) => ({
      ...prevState,
      secondOperand: state.firstOperand,
      firstOperand: "0",
    }));
  };

  const chooseOperator = (operator: Operator) => {
    state.secondOperand === "" ? setSecondOperand() : null;

    switch (operator) {
      case "×":
        setState((prevState) => ({ ...prevState, operation: "×" }));
        break;
      case "÷":
        setState((prevState) => ({ ...prevState, operation: "÷" }));
        break;
      case "-":
        setState((prevState) => ({ ...prevState, operation: "-" }));
        break;
      case "+":
        setState((prevState) => ({ ...prevState, operation: "+" }));
        break;
      default:
    }
  };

  const reset = () => {
    setState(initialState);
  };

  const calculate = () => {
    const firstNum = parseInt(state.firstOperand);
    const secondNum = parseInt(state.secondOperand);
    let answer: number;
    if (state.operation === "×") {
      answer = firstNum * secondNum;
    } else if (state.operation === "+") {
      answer = firstNum + secondNum;
    } else if (state.operation === "-") {
      answer = secondNum - firstNum;
    } else if (state.operation === "÷") {
      answer = secondNum / firstNum;
    }
  };

  return (
    <div className="calculator">
      <h1 className="calculator__name">Calculator name</h1>
      <Screen
        firstOperand={state.firstOperand}
        operation={state.operation}
        secondOperand={state.secondOperand}
      />
      <Pad
        numbers={numbers}
        actions={actions}
        operations={operations}
        setFirstOperand={setFirstOperand}
        chooseOperator={chooseOperator}
        reset={reset}
        calculate={calculate}
      />
    </div>
  );
};

export default Calculator;
