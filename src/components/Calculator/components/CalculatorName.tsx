import { useState, useRef } from "react";

interface Props {
  calcName: string;
  changeCalcName: (value: string) => void;
}

const CalculatorName: React.FC<Props> = ({ changeCalcName }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("Calculator");
  return (
    <form
      className="calculator__name"
      onSubmit={(e) => {
        e.preventDefault();
        changeCalcName(value);
        inputRef.current?.blur();
        console.log("submited");
      }}
    >
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit"></button>
    </form>
  );
};

export default CalculatorName;
