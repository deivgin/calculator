import { Operator } from "./model";

interface Props {
  operation: Operator;
  onClick: (operator: Operator) => void;
}

const getClassName = (operation: string) => {
  let str = "";
  switch (operation) {
    case "+":
      str = "plus";
      break;
    case "-":
      str = "minus";
      break;
    case "÷":
      str = "divide";
      break;
    case "×":
      str = "multiply";
      break;
  }

  return `calculator__button pad__operations--${str}`;
};

const OperationButton: React.FC<Props> = ({ operation, onClick }) => {
  return (
    <button
      className={getClassName(operation)}
      onClick={() => onClick(operation)}
    >
      {operation}
    </button>
  );
};

export default OperationButton;
