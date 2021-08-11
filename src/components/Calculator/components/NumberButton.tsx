import { Operand } from "./model";

interface Props {
  number: Operand;
  onClick: (num: Operand) => void;
}

const NumberButton: React.FC<Props> = ({ number, onClick }) => {
  return (
    <button
      className={`calculator__button pad__numbers--${number}`}
      onClick={() => onClick(number)}
    >
      {number}
    </button>
  );
};

export default NumberButton;
