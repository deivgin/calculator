import { State } from "./model";

type Props = Omit<State, "isCalculated" | "calcName">;

const Screen: React.FC<Props> = ({ prevOperand, currOperand, operation }) => {
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
