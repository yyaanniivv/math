import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import Numpad from "./Numpad";
import Settings from "./Settings";
import HistoricProblems from "./HistoricProblems";
import { IConfig, IProblem, NumpadChar, Problem } from "./common";

import "./App.css";

function App() {
  let [a, setA] = useState<number>(0);
  let [b, setB] = useState<number>(0);
  let [action, setAction] = useState<string>("x");
  let [answerHint, setAnswerHint] = useState<string>("");
  let [config, setConfig] = useState<IConfig>({
    aRange: 50,
    aOffset: 1,
    bRange: 5,
    bOffset: 2,
  });

  let [previousProblems, setPreviousProblems] = useState<Array<IProblem>>([]);

  // const action = {
  //   sum: {
  //     display: "+",
  //     action: (a: number, b: number) => a + b,
  //     config: { aOffset: 250, aRange: 250, bOffset: 10, bRange: 30 },
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

    const resultField = document.getElementById("result") as HTMLInputElement;
    resultField.value = "?";
  };

  // For the visual numpad
  const numpadClick = (char: NumpadChar) => {
    const resultField = document.getElementById("result") as HTMLInputElement;
    if (char === "<") {
      resultField.value = resultField.value.substr(0, resultField.value.length - 1);
    } else {
      resultField.value = resultField.value + char;
    }
  };

  const saveProblem = (a: number, b: number, action: string) => {
    const previousProblem: IProblem = { a, b, action };
    setPreviousProblems([previousProblem, ...previousProblems]);
  };

  const checkProblem = () => {
    const resultField = document.getElementById("result") as HTMLInputElement;
    const res = parseInt(resultField.value);
    if (res === a * b) {
      setAnswerHint("כל הכבוד");
      saveProblem(a, b, action);
      generateProblem();
    } else if (res <= a * b) {
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
        <p>חשבון פשוט</p>

        <Problem a={a} b={b} action={action} />

        {answerHint}
        <div className="MathProblem">
          <input placeholder="?" type="number" id="result" />
          <button onClick={() => checkProblem()}>בדוק</button>
        </div>
        <Numpad
          onClick={(char: NumpadChar) => {
            numpadClick(char);
          }}
        />
        <HistoricProblems problems={previousProblems} />
        <img src={logo} className="App-logo" alt="logo" />
        <Settings config={config} setConfig={setConfig} />
      </header>
    </div>
  );
}

export default App;
