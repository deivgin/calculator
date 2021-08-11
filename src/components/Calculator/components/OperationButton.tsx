import { useEffect, useState } from "react";
import { Operator } from "./model";

interface Props {
  operation: Operator;
  onClick: (operator: Operator) => void;
}

const OperationButton: React.FC<Props> = ({ operation, onClick }) => {
  const [str, setStr] = useState("");
  useEffect(() => {
    switch (operation) {
      case "+":
        setStr("plus");
        break;
      case "-":
        setStr("minus");
        break;
      case "÷":
        setStr("divide");
        break;
      case "×":
        setStr("multiply");
        break;
    }
  }, []);
  return (
    <button
      className={`calculator__button pad__operations--${str}`}
      onClick={() => onClick(operation)}
    >
      {operation}
    </button>
  );
};

export default OperationButton;
