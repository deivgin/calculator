interface ButtonProps {
  children: string;
  onClick: any;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="calculator__button"
      onClick={(e) => {
        const text = e.target as HTMLElement;
        onClick(text.innerText);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
