import React, { useEffect, useRef, useState } from "react";
import { IconButton } from "@material-ui/core";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";

import logo from "./logo.svg";
import Numpad from "./Numpad";
import Settings from "./Settings";
import HistoricProblems from "./HistoricProblems";
import { Problem } from "./Problem";
import { Action, IConfig, IProblem, NumpadChar } from "./common";
import { calculate } from "./utils/calculate";

import "./App.css";

function App() {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [action, setAction] = useState<Action>('+');
  const [answerHint, setAnswerHint] = useState<string>('');
  const [config, setConfig] = useState<IConfig>({
    aRange: 50,
    aOffset: 1,
    bRange: 9,
    bOffset: 2,
  });

  const [previousProblems, setPreviousProblems] = useState<Array<IProblem>>([]);

  const resultRef = useRef<HTMLInputElement>(null);

  // Clean impl without eval
  // const action = {
  //   sum: {
  //     display: "+",
  //     action: (a: number, b: number) => a + b,
  //     config: { aOffset: 250, aRange: 10, bOffset: 1, bRange: 30 },
  //   },
  //   multiply: {
  //     display: "x",
  //     action: (a: number, b: number) => a * b,
  //     config: { aOffset: 1, aRange: 50, bOffset: 2, bRange: 5},
  //   },
  // };

  const generateProblem = () => {
    setA(Math.floor(Math.random() * config["aRange"] + config["aOffset"]));
    setB(Math.floor(Math.random() * config["bRange"] + config["bOffset"]));

    if (resultRef.current) {
      resultRef.current.value = "?";
    }
  };

  // For the visual numpad
  const numpadClick = (char: NumpadChar) => {
    const resultField = resultRef.current;
    if (!resultField) return;
    if (char === "⌫") {
      resultField.value = resultField.value.slice(0, -1);
    } else if (char === "✅") {
      checkProblem();
    } else {
      resultField.value = resultField.value + char;
    }
  };

  const saveProblem = (a: number, b: number, action: Action) => {
    const previousProblem: IProblem = { a, b, action };
    setPreviousProblems([previousProblem, ...previousProblems]);
  };

  const checkProblem = () => {
    const resultField = resultRef.current;
    if (!resultField) return;
    const res = parseInt(resultField.value);
    const expectedResult = calculate(a, b, action);
    if (res === expectedResult) {
      setAnswerHint("כל הכבוד");
      saveProblem(a, b, action);
      generateProblem();
    } else if (res <= expectedResult) {
      setAnswerHint("נמוך מידי");
    } else {
      setAnswerHint("גבוה מידי");
    }
    resultField.value = "?";
  };

  // Generate first problem.
  useEffect(() => {
    generateProblem();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <IconButton
          // onClick={() => setToggle(!toggle)}
          // className={clsx("expand", {
          //   expandOpen: toggle,
          // })}
        >
          <ExpandMoreIcon color="primary" />
        </IconButton>
        <p>חשבון פשוט</p>
      </header>

      <div className="MathProblem">
        <Problem a={a} b={b} action={action} />
        {answerHint}

        <input placeholder="?" type="number" ref={resultRef} />
      </div>
      <Numpad
        onClick={(char: NumpadChar) => {
          numpadClick(char);
        }}
      />
      <HistoricProblems problems={previousProblems} />
      <img src={logo} className="App-logo" alt="logo" />
      <Settings action={action} config={config} setConfig={setConfig} setAction={setAction} />
    </div>
  );
}

export default App;
