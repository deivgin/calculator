import { Operator } from "./model";

interface Props {
  mainScreen: string;
  operation: Operator | null;
}

const Screen: React.FC<Props> = ({ mainScreen, operation }) => {
  return (
    <div className="calculator__screen">
      <div className="calculation">{operation}</div>
      <div className="number">{mainScreen}</div>
    </div>
  );
};

export default Screen;
