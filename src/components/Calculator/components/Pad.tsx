import NumberButton from "./NumberButton";
import ActionButton from "./ActionButton";
import OperationButton from "./OperationButton";
import { Operand, Operator, Action } from "./model";

interface Props {
  numbers: Operand[];
  operations: Operator[];
  actions: Action[];
}

const Pad: React.FC<Props> = ({ numbers, operations, actions }) => {
  return (
    <div className="pad">
      <div className="pad__numbers">
        {numbers.map((number, index) => (
          <NumberButton key={index}>{number}</NumberButton>
        ))}
      </div>
      <div className="pad__actions">
        {operations.map((operation, index) => (
          <OperationButton key={index}>{operation}</OperationButton>
        ))}
      </div>
      <div className="pad__operators">
        {actions.map((action, index) => (
          <ActionButton key={index}>{action}</ActionButton>
        ))}
      </div>
    </div>
  );
};

export default Pad;
