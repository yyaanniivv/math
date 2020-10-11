import React from "react";
import "./Numpad.css";

interface Props {
  onClick: (i: number) => void;
}

function Numpad(props: Props) {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((digit) => {
    return (
      <div className="digit" onClick={() => props.onClick(digit)} key={digit}>
        {digit}
      </div>
    );
  });

  return <div className="numpad">{digits}</div>;
}
export default Numpad;
