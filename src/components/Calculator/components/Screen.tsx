import { Operator } from "./model";

interface Props {
  mainScreen: string;
}

const Screen: React.FC<Props> = ({ mainScreen }) => {
  return (
    <div className="calculator__screen">
      <div className="calculation">10/5</div>
      <div className="number">{mainScreen}</div>
    </div>
  );
};

export default Screen;
