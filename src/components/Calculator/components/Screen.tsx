import { Operator } from "./model";

interface Props {
  firstOperand: string;
  operation: Operator | null;
  secondOperand: string | null;
}

const Screen: React.FC<Props> = ({
  firstOperand,
  operation,
  secondOperand,
}) => {
  return (
    <div className="calculator__screen">
      <div className="calculation"></div>
      <div className="number">
        {firstOperand}
        {operation}
        {secondOperand}
      </div>
    </div>
  );
};

export default Screen;
