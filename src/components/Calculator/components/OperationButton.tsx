import { Operator } from "./model";

interface Props {
  operation: Operator;
  onClick: (operator: Operator) => void;
}

const OperationButton: React.FC<Props> = ({ operation, onClick }) => {
  return (
    <button
      className="calculator__button calculator__button--operation"
      onClick={() => onClick(operation)}
    >
      {operation}
    </button>
  );
};

export default OperationButton;
