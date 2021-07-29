import Screen from "./components/Screen";
import Pad from "./components/Pad";
import { useState } from "react";

const characters = [
  "=",
  "C",
  "*",
  ":",
  "-",
  "+",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  "0",
];

const Calculator = () => {
  const [display, setDisplay] = useState("0");

  const handleClick = (number: string) => {
    setDisplay(number);
  };
  return (
    <div className="calculator">
      <h1 className="calculator__name">Calculator name</h1>
      <Screen display={display} />
      <Pad characters={characters} handleClick={handleClick} />
    </div>
  );
};

export default Calculator;
