import Screen from "./components/Screen";
import Pad from "./components/Pad";
import CalculatorName from "./components/CalculatorName";
import ThemeChanger from "./components/ThemeChanger";
import { useEffect } from "react";
import { Operand, Operator, Action } from "./components/model";
import { useCalculator } from "./hooks/useCalculator";

const actions: Action[] = ["=", "C", "."];
const numbers: Operand[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operations: Operator[] = ["×", "÷", "-", "+"];

const Calculator = () => {
  const {
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
  } = useCalculator();

  useEffect(() => {
    reset();
  }, [storedName]);

  return (
    <div className="calculator">
      <ThemeChanger />
      <CalculatorName calcName={storedName} onChangeCalcName={changeCalcName} />
      <Screen
        prevOperand={prevOperand}
        currOperand={currOperand}
        operation={operation}
      />
      <Pad
        numbers={numbers}
        actions={actions}
        operations={operations}
        onChooseOperand={chooseOperand}
        onChooseOperator={chooseOperator}
        onReset={reset}
        onCalculate={calculate}
        onAddDot={addDot}
        onDeleteCharacter={deleteCharacter}
      />
    </div>
  );
};

export default Calculator;
