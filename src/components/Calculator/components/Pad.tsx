import Button from "./Button";

interface PadProps {
  characters: string[];
}

const Pad: React.FC<PadProps> = ({ characters }) => {
  return (
    <div>
      {characters.map((char, index) => (
        <Button key={index}>{char}</Button>
      ))}
    </div>
  );
};

export default Pad;
