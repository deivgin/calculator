interface ScreenProps {
  display: string;
}

const Screen: React.FC<ScreenProps> = ({ display }) => {
  return (
    <div className="calculator__screen">
      <div className="calculation">10 * 3</div>
      <div className="number">{display}</div>
    </div>
  );
};

export default Screen;
