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
const numbers: Operand[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operations: Operator[] = ["×", "÷", "-", "+"];

const Calculator = () => {
  const [state, setState] = useState<State>(initialState);

  return (
    <div className="calculator">
      <h1 className="calculator__name">Calculator name</h1>
      <Screen />
      <Pad numbers={numbers} actions={actions} operations={operations} />
    </div>
  );
};

export default Calculator;
