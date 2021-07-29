import Screen from "./components/Screen";
import Pad from "./components/Pad";
import { useState } from "react";
import { Operand, Operator } from "./components/model";

import characters from "../../utils/characters";

const Calculator = () => {
  const [currOperand, setCurrOperand] = useState("0");
  const [prevOperand, setPrevOperand] = useState("");
  const [selectedOperation, setSelectedOperation] = useState<Operator>();

  const appendOperand = (number: Operand) => {
    currOperand === "0"
      ? setCurrOperand(number)
      : setCurrOperand(`${currOperand}${number}`);
  };

  const chooseOperation = (operation: Operator) => {
    setPrevOperand(currOperand);
    setCurrOperand("0");
    setSelectedOperation(operation);
  };

  return (
    <div className="calculator">
      <h1 className="calculator__name">Calculator name</h1>
      <Screen display={currOperand} />
      <Pad
        characters={characters}
        appendOperand={appendOperand}
        chooseOperation={chooseOperation}
      />
    </div>
  );
};

export default Calculator;
