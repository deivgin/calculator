import { Operator } from "./model";
import { State } from "./model";

const Screen: React.FC<State> = ({
  firstOperand,
  operation,
  secondOperand,
  mainNumber,
}) => {
  return (
    <div className="calculator__screen">
      <div className="calculation">
        {operation && firstOperand}
        {operation}
        {secondOperand !== "0" && secondOperand}
      </div>
      <div className="number">{mainNumber}</div>
    </div>
  );
};

export default Screen;
