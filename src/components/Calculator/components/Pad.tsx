import NumberButton from "./NumberButton";
import ActionButton from "./ActionButton";
import OperationButton from "./Operationbutton";
import { Operand, Operator, Action } from "./model";

interface Props {
  numbers: Operand[];
  operations: Operator[];
  actions: Action[];
  setFirstOperand: (num: number) => void;
}

const Pad: React.FC<Props> = ({
  numbers,
  operations,
  actions,
  setFirstOperand,
}) => {
  return (
    <div className="pad">
      <div className="pad__numbers">
        {numbers.map((number, index) => (
          <NumberButton key={index} number={number} onClick={setFirstOperand} />
        ))}
      </div>
      <div className="pad__operators">
        {operations.map((operation, index) => (
          <OperationButton key={index}>{operation}</OperationButton>
        ))}
      </div>
      <ActionButton char="=" type="equal" />
      <ActionButton char="C" type="delete" />
      <ActionButton char="." type="dot" />
    </div>
  );
};

export default Pad;
