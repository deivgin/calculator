import { Action } from "./model";

interface Props {
  char: Action;
  type: string;
}

const ActionButton: React.FC<Props> = ({ char, type }) => {
  return (
    <button className={`calculator__button pad__actions--${type}`}>
      {char}
    </button>
  );
};

export default ActionButton;
