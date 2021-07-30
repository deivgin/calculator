import { Action } from "./model";

interface Props {
  children: Action;
}

const ActionButton: React.FC<Props> = ({ children }) => {
  return (
    <button className="calculator__button calculator__button--action">
      {children}
    </button>
  );
};

export default ActionButton;
