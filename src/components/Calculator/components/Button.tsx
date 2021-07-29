interface ButtonProps {
    children: string;
    handleClick?: () => void
}

const Button:React.FC<ButtonProps> = ({children, handleClick}) => {
    return <button className="calculator__button" onClick={handleClick}>{children}</button>
}

export default Button;