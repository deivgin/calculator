import { useState } from "react";

interface Props {
  calcName: string;
  onChangeCalcName: (value: string) => void;
}

const CalculatorName: React.FC<Props> = ({ calcName, onChangeCalcName }) => {
  const [value, setValue] = useState(calcName);
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          onChangeCalcName(value);
        }
      }}
    />
  );
};

export default CalculatorName;
