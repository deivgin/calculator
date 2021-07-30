import { Operand } from "./model";

interface Props {
  number: Operand;
  onClick: (num: number) => void;
}

const NumberButton: React.FC<Props> = ({ number, onClick }) => {
  return (
    <button
      className="calculator__button calculator__button--number"
      onClick={() => onClick(number)}
    >
      {number}
    </button>
  );
};

export default NumberButton;
