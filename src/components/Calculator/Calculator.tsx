import Screen from "./components/Screen";
import Pad from "./components/Pad";

const characters = ['=', 'C', '*', ':', '-', '+', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0'];

const Calculator = () => {
    return <div className="calculator">
        <h1 className="calculator__name">Calculator name</h1>
        <Screen />
        <Pad characters={characters} />
    </div>
}

export default Calculator;