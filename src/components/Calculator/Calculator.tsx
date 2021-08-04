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
  const { prevOperand, currOperand, operation } = state;

  useEffect(() => {
    console.log(state);
  }, [state]);

  const chooseOperand = (num: number) => {
    setState((prevState) => ({
      ...prevState,
      currOperand: currOperand + num.toString(),
    }));
  };

  const addDot = () => {
    setState((prevState) => ({
      ...prevState,
      currOperand: currOperand.includes(".") ? currOperand : currOperand + ".",
    }));
  };

  const chooseOperator = (operator: Operator) => {
    setState((prevState) => ({
      ...prevState,
      operation: operator,
      prevOperand: currOperand,
      currOperand: "",
    }));
    calculate();
  };

  const calculate = () => {
    if (operation === "+") {
      let answer = parseFloat(prevOperand) + parseFloat(currOperand);
      setState((prevState) => ({
        ...prevState,
        currOperand: answer.toString(),
        prevOperand: "",
        operation: null,
      }));
    } else if (operation === "-") {
      let answer = parseFloat(prevOperand) - parseFloat(currOperand);
      setState((prevState) => ({
        ...prevState,
        currOperand: answer.toString(),
        prevOperand: "",
        operation: null,
      }));
    } else if (operation === "÷") {
      let answer = parseFloat(prevOperand) / parseFloat(currOperand);
      setState((prevState) => ({
        ...prevState,
        currOperand: answer.toString(),
        prevOperand: "",
        operation: null,
      }));
    } else if (operation === "×") {
      let answer = parseFloat(prevOperand) * parseFloat(currOperand);
      setState((prevState) => ({
        ...prevState,
        currOperand: answer.toString(),
        prevOperand: "",
        operation: null,
      }));
    }
  };

  const reset = () => {
    setState(initialState);
  };

  return (
    <div className="calculator">
      <h1 className="calculator__name">Calculator name</h1>
      <Screen
        prevOperand={prevOperand}
        currOperand={currOperand}
        operation={operation}
      />
      <Pad
        numbers={numbers}
        actions={actions}
        operations={operations}
        chooseOperand={chooseOperand}
        chooseOperator={chooseOperator}
        reset={reset}
        calculate={calculate}
        addDot={addDot}
      />
    </div>
  );
};

export default Calculator;
