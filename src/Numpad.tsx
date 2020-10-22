import React from "react";
import { NumpadChar } from "./common";
import "./Numpad.css";

interface Props {
  onClick: (char: NumpadChar) => void;
}

function Numpad(props: Props) {
  const characters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "⌫", "0", "✅"].map((char) => {
    return (
      <div className="char" onClick={() => props.onClick(char as NumpadChar)} key={char}>
        {char}
      </div>
    );
  });

  return <div className="numpad">{characters}</div>;
}
export default Numpad;
