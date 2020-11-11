import React from "react";
import Button from '@material-ui/core/Button';
import { NumpadChar } from "./common";
import "./Numpad.css";

interface Props {
  onClick: (char: NumpadChar) => void;
}

function Numpad(props: Props) {
  const characters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "⌫", "0", "✅"].map((char) => {
    return (
      <Button variant="contained" color="primary" onClick={() => props.onClick(char as NumpadChar)} key={char}>
        {char}
      </Button>
    );
  });

  return <div className="numpad">{characters}</div>;
}
export default Numpad;
