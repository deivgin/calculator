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

  const setOperand = (num: number) => {
    if (state.operation === null) {
      setState((prevState) => ({
        ...prevState,
        firstOperand:
          state.firstOperand === "0"
            ? num.toString()
            : state.firstOperand + num.toString(),
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        secondOperand:
          state.secondOperand === "0"
            ? num.toString()
            : state.secondOperand + num.toString(),
      }));
    }
  };

  const chooseOperator = (operator: Operator) => {
    setState((prevState) => ({ ...prevState, operation: operator }));
  };

  const reset = () => {
    setState(initialState);
  };

  const calculate = () => {
    const firstNum = parseInt(state.firstOperand);
    const secondNum = parseInt(state.secondOperand);
    let answer = 0;
    if (state.operation === "×") {
      answer = firstNum * secondNum;
    } else if (state.operation === "+") {
      answer = firstNum + secondNum;
    } else if (state.operation === "-") {
      answer = firstNum - secondNum;
    } else if (state.operation === "÷") {
      answer = firstNum / secondNum;
    }

    setState((prevState) => ({
      ...prevState,
      firstOperand: answer.toString(),
    }));
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
        setOperand={setOperand}
        chooseOperator={chooseOperator}
        reset={reset}
        calculate={calculate}
      />
    </div>
  );
};

export default Calculator;
