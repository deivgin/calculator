import { useState } from "react";

interface Props {
  calcName: string;
  changeCalcName: (value: string) => void;
}

const CalculatorName: React.FC<Props> = ({ changeCalcName }) => {
  const [value, setValue] = useState("Calculator");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        changeCalcName(value);
      }}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit"></button>
    </form>
  );
};

export default CalculatorName;
