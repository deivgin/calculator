import NumberButton from "./NumberButton";
import ActionButton from "./ActionButton";
import OperationButton from "./OperationButton";
import { Operand, Operator, Action } from "./model";

interface Props {
  numbers: Operand[];
  operations: Operator[];
  actions: Action[];
  onChooseOperand: (num: number) => void;
  onChooseOperator: (operator: Operator) => void;
  onReset: () => void;
  onCalculate: () => void;
  onAddDot: () => void;
  onDeleteCharacter: () => void;
}

const Pad: React.FC<Props> = ({
  numbers,
  operations,
  onChooseOperand,
  onChooseOperator,
  onReset,
  onCalculate,
  onAddDot,
  onDeleteCharacter,
}) => {
  return (
    <div className="calculator__pad">
      {numbers.map((number) => (
        <NumberButton key={number} number={number} onClick={onChooseOperand} />
      ))}

      {operations.map((operation) => (
        <OperationButton
          key={operation}
          operation={operation}
          onClick={onChooseOperator}
        />
      ))}

      <ActionButton char="=" type="equal" onClick={onCalculate} />
      <ActionButton char="AC" type="reset" onClick={onReset} />
      <ActionButton char="C" type="delete" onClick={onDeleteCharacter} />
      <ActionButton char="." type="dot" onClick={onAddDot} />
    </div>
  );
};

export default Pad;
