import { Operator } from "./model";

interface Props {
  children: Operator;
}

const OperationButton: React.FC<Props> = ({ children }) => {
  return (
    <button className="calculator__button calculator__button-operation">
      {children}
    </button>
  );
};

export default OperationButton;
