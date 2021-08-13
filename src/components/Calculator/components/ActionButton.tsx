import { Action } from "./model";

interface Props {
  char: Action;
  type: "equal" | "reset" | "delete" | "dot";
  onClick?: () => void;
}

const ActionButton: React.FC<Props> = ({ char, type, onClick }) => {
  return (
    <button className={`calculator__button actions--${type}`} onClick={onClick}>
      {char}
    </button>
  );
};

export default ActionButton;
