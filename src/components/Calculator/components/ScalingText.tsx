import { useState, useRef, useEffect } from "react";

interface Props {
  operand: string;
}

const ScalingText: React.FC<Props> = ({ operand }) => {
  const text = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const parentNode = text.current?.parentNode;
    const textWidth = text.current?.offsetWidth;
    const parentWidth = (parentNode as HTMLElement).offsetWidth;
    let currScale = 0;
    if (textWidth) currScale = parentWidth / textWidth;
    if (currScale === 0 || currScale === scale) return;
    if (currScale < 1) setScale(currScale);
  }, [operand]);

  return (
    <div
      ref={text}
      style={{
        position: "absolute",
        right: 0,
        transform: `scale(${scale})`,
        transformOrigin: "right",
      }}
    >
      {operand}
    </div>
  );
};

export default ScalingText;
