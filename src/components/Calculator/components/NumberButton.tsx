interface Props {
  children: number;
}

const NumberButton: React.FC<Props> = ({ children }) => {
  return (
    <button className="calculator__button calculator__button--number">
      {children}
    </button>
  );
};

export default NumberButton;
