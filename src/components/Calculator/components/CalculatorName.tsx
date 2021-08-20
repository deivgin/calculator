import React, { useState, useRef } from "react";

interface Props {
  calcName: string;
  onChangeCalcName: (value: string) => void;
}

const CalculatorName: React.FC<Props> = ({ calcName, onChangeCalcName }) => {
  const input = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(calcName);
  return (
    <input
      ref={input}
      className="calculator__name"
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          onChangeCalcName(value);
          input.current?.blur();
        }
      }}
    />
  );
};

export default CalculatorName;
