import Button from "./Button"

interface PadProps {
    characters: string[]
}

const Pad: React.FC<PadProps> = ({characters}) => {
    return <div>{characters.map((char)=><Button>{char}</Button>)}</div>
}

export default Pad