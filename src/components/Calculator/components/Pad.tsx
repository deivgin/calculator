import NumberButton from "./NumberButton";
import ActionButton from "./ActionButton";
import OperationButton from "./OperationButton";
import { Operand, Operator, Action } from "./model";

interface Props {
  numbers: Operand[];
  operations: Operator[];
  actions: Action[];
  chooseOperand: (num: number) => void;
  chooseOperator: (operator: Operator) => void;
  reset: () => void;
  calculate: () => void;
  addDot: () => void;
  deleteCharacter: () => void;
}

const Pad: React.FC<Props> = ({
  numbers,
  operations,
  chooseOperand,
  chooseOperator,
  reset,
  calculate,
  addDot,
  deleteCharacter,
}) => {
  return (
    <div className="calculator__pad">
      {numbers.map((number, index) => (
        <NumberButton key={index} number={number} onClick={chooseOperand} />
      ))}

      {operations.map((operation, index) => (
        <OperationButton
          key={index}
          operation={operation}
          onClick={chooseOperator}
        />
      ))}
      <ActionButton char="=" type="equal" onClick={calculate} />
      <ActionButton char="AC" type="reset" onClick={reset} />
      <ActionButton char="C" type="delete" onClick={deleteCharacter} />
      <ActionButton char="." type="dot" onClick={addDot} />
    </div>
  );
};

export default Pad;
