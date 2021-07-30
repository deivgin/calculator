import Screen from "./components/Screen";
import Pad from "./components/Pad";
import { useState } from "react";
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
    state.secondOperand !== "0" ? setSecondOperand() : null;

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

  return (
    <div className="calculator">
      <h1 className="calculator__name">Calculator name</h1>
      <Screen
        mainScreen={state.firstOperand}
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
      />
    </div>
  );
};

export default Calculator;
