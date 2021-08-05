interface Props {
  calcName: string;
  changeCalcName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CalculatorName: React.FC<Props> = ({ calcName, changeCalcName }) => {
  return <input type="text" value={calcName} onChange={changeCalcName} />;
};

export default CalculatorName;
