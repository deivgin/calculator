import { State } from "./model";
import ScalingText from "./ScalingText";

type Props = Omit<State, "calcName">;

const Screen: React.FC<Props> = ({ prevOperand, currOperand, operation }) => {
  return (
    <div className="calculator__screen">
      <div className="calculation">
        {operation && prevOperand}
        {operation}
      </div>
      <div className="number">
        {currOperand.length === 0 && prevOperand.length === 0 ? (
          "0"
        ) : (
          <ScalingText operand={currOperand} />
        )}
        {prevOperand.length > 0 && currOperand.length === 0 && (
          <ScalingText operand={prevOperand} />
        )}
      </div>
    </div>
  );
};

export default Screen;
