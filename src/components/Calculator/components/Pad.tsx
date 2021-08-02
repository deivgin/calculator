import NumberButton from "./NumberButton";
import ActionButton from "./ActionButton";
import OperationButton from "./OperationButton";
import { Operand, Operator, Action } from "./model";

interface Props {
  numbers: Operand[];
  operations: Operator[];
  actions: Action[];
  setFirstOperand: (num: Operand) => void;
  chooseOperator: (operator: Operator) => void;
  reset: () => void;
  calculate: () => void;
}

const Pad: React.FC<Props> = ({
  numbers,
  operations,
  actions,
  setFirstOperand,
  chooseOperator,
  reset,
  calculate,
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
          <OperationButton
            key={index}
            operation={operation}
            onClick={chooseOperator}
          />
        ))}
      </div>
      <ActionButton char="=" type="equal" onClick={calculate} />
      <ActionButton char="AC" type="reset" onClick={reset} />
      <ActionButton char="C" type="delete" />
      <ActionButton char="." type="dot" />
    </div>
  );
};

export default Pad;
