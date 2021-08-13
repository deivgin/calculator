import Screen from "./components/Screen";
import Pad from "./components/Pad";
import CalculatorName from "./components/CalculatorName";
import ThemeChanger from "./components/ThemeChanger";
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
  const { prevOperand, currOperand, operation, isCalculated, calcName } = state;

  useEffect(() => {
    setState({ ...initialState, calcName: calcName });
  }, [calcName]);

  const chooseOperand = (num: number) => {
    if ((currOperand.length === 0 && num === 0) || currOperand.length > 21)
      return;
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
    let operand = currOperand;
    if (prevOperand && currOperand) return;
    if (prevOperand === "" && currOperand === "") operand = "0";
    if (operand.slice(0, 1) === ".") operand = "0" + operand;
    if (operand.slice(-1) === ".") operand = operand.slice(0, -1);

    setState((prevState) => ({
      ...prevState,
      operation: operator,
      prevOperand: operand === "" ? prevOperand : operand,
      currOperand: "",
    }));
  };

  const calculate = () => {
    if (currOperand === "" || prevOperand === "" || currOperand === ".") return;
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

  const changeCalcName = (value: string) => {
    setState((prevState) => ({
      ...prevState,
      calcName: value,
    }));
  };

  return (
    <div className="calculator">
      <ThemeChanger />
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
