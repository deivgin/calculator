import { useState } from "react";
import { Operator, State, initialState } from "../components/model";
import useLocalStorage from "./useLocalStorage";

export const useCalculator = () => {
  const [{ prevOperand, currOperand, operation, isCalculated }, setState] =
    useState<State>(initialState);
  const [storedName, setStoredName] = useLocalStorage(
    "calculator_name",
    "Calculator"
  );
  const chooseOperand = (num: number) => {
    const maxNumLength = 21;
    const writingDisabled =
      (currOperand.length === 0 && num === 0) ||
      currOperand.length > maxNumLength;

    if (writingDisabled) {
      return;
    }
    setState((prevState) => ({
      ...prevState,
      currOperand: isCalculated ? num.toString() : currOperand + num.toString(),
      isCalculated: false,
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
    if (prevOperand && currOperand) {
      return;
    }
    if (prevOperand === "" && currOperand === "") {
      operand = "0";
    }
    if (operand.slice(0, 1) === ".") {
      operand = "0" + operand;
    }
    if (operand.slice(-1) === ".") {
      operand = operand.slice(0, -1);
    }

    setState((prevState) => ({
      ...prevState,
      operation: operator,
      prevOperand: operand === "" ? prevOperand : operand,
      currOperand: "",
    }));
  };

  const calculate = () => {
    const calculationDisabled =
      currOperand === "" || prevOperand === "" || currOperand === ".";
    if (calculationDisabled) return;
    const answer = getOperation();
    setState((prevState) => ({
      ...prevState,
      currOperand: answer.toString(),
      prevOperand: "",
      operation: null,
    }));
  };

  const getOperation = () => {
    switch (operation) {
      case "+":
        return parseFloat(prevOperand) + parseFloat(currOperand);
      case "-":
        return parseFloat(prevOperand) - parseFloat(currOperand);
      case "÷":
        return parseFloat(prevOperand) / parseFloat(currOperand);
      case "×":
        return parseFloat(prevOperand) * parseFloat(currOperand);
      default:
        return 0;
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
    setStoredName(value);
  };

  return {
    prevOperand,
    currOperand,
    operation,
    storedName,
    chooseOperand,
    chooseOperator,
    addDot,
    calculate,
    reset,
    deleteCharacter,
    changeCalcName,
  };
};
