interface ButtonProps {
  children: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button {...props} className="calculator__button">
      {props.children}
    </button>
  );
};

export default Button;
