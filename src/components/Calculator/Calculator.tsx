import Screen from "./components/Screen";
import Pad from "./components/Pad";
import { useState } from "react";
import { Operand, Operator, State, initialState } from "./components/model";
import { actions, numbers, operations } from "../../utils/characters";

const Calculator = () => {
  const [state, setState] = useState<State>(initialState);

  return (
    <div className="calculator">
      <h1 className="calculator__name">Calculator name</h1>
      <Screen />
      <Pad numbers={numbers} />
    </div>
  );
};

export default Calculator;
