import Screen from "./components/Screen";
import Pad from "./components/Pad";
import CalculatorName from "./components/CalculatorName";
import React, { useEffect, useState } from "react";
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
  const { prevOperand, currOperand, operation, isCalculated, calcName } = state;

  useEffect(() => {
    //setState(initialState);
    console.log(state);
  }, [calcName]);

  const chooseOperand = (num: number) => {
    setState((prevState) => ({
      ...prevState,
      currOperand: isCalculated ? num.toString() : currOperand + num.toString(),
      isCalculated: isCalculated && false,
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
        isCalculated: true,
      }));
    } else if (operation === "-") {
      let answer = parseFloat(prevOperand) - parseFloat(currOperand);
      setState((prevState) => ({
        ...prevState,
        currOperand: answer.toString(),
        prevOperand: "",
        operation: null,
        isCalculated: true,
      }));
    } else if (operation === "÷") {
      let answer = parseFloat(prevOperand) / parseFloat(currOperand);
      setState((prevState) => ({
        ...prevState,
        currOperand: answer.toString(),
        prevOperand: "",
        operation: null,
        isCalculated: true,
      }));
    } else if (operation === "×") {
      let answer = parseFloat(prevOperand) * parseFloat(currOperand);
      setState((prevState) => ({
        ...prevState,
        currOperand: answer.toString(),
        prevOperand: "",
        operation: null,
        isCalculated: true,
      }));
    }
  };

  const reset = () => {
    setState(initialState);
  };

  const deleteCharacter = () => {
    setState((prevState) => ({
      ...prevState,
      currOperand: currOperand.slice(0, -1),
    }));
  };

  const changeCalcName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      calcName: e.target.value,
    }));
  };

  return (
    <div className="calculator">
      <CalculatorName calcName={calcName} changeCalcName={changeCalcName} />
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
        deleteCharacter={deleteCharacter}
      />
    </div>
  );
};

export default Calculator;
