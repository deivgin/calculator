import { Operator } from "./model";
import { State } from "./model";

const Screen: React.FC<State> = ({ prevOperand, currOperand, operation }) => {
  return (
    <div className="calculator__screen">
      <div className="calculation">
        {operation && prevOperand}
        {operation}
      </div>
      <div className="number">
        {currOperand.length === 0 && prevOperand.length === 0
          ? "0"
          : currOperand}
        {prevOperand.length > 0 && currOperand.length === 0 && prevOperand}
      </div>
    </div>
  );
};

export default Screen;
