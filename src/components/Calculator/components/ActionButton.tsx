import { Action } from "./model";

interface Props {
  char: Action;
  type: "equal" | "reset" | "delete" | "dot";
  onClick?: any; //Fix this part
}

const ActionButton: React.FC<Props> = ({ char, type, onClick }) => {
  return (
    <button
      className={`calculator__button pad__actions--${type}`}
      onClick={() => onClick()}
    >
      {char}
    </button>
  );
};

export default ActionButton;
