import { Operator } from "./model";

interface Props {
  mainScreen: string;
  operation: Operator | null;
  secondOperand: string | null;
}

const Screen: React.FC<Props> = ({ mainScreen, operation, secondOperand }) => {
  return (
    <div className="calculator__screen">
      <div className="calculation">
        {secondOperand}
        {operation}
      </div>
      <div className="number">{mainScreen}</div>
    </div>
  );
};

export default Screen;
