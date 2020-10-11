import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import Numpad from "./Numpad";
import "./App.css";

function App() {
  let [a, setA] = useState(0);
  let [b, setB] = useState(0);
  let [answerHint, setAnswerHint] = useState("");
  let [config, setConfig] = useState({ aRange: 50, aOffset: 1, bRange: 5, bOffset: 2 });

  interface leProblem {
    a: number;
    b: number;
    action?: string;
  }

  let [previousProblems, setPreviousProblems] = useState<Array<leProblem>>([]);

  // const action = {
  //   sum: {
  //     display: "+",
  //     action: (a: number, b: number) => a + b,
  //     config: { aOffset, aRange, bOffset, bRange },
  //   },
  //   multiply: {
  //     display: "x",
  //     action: (a: number, b: number) => a * b,
  //     config: { aOffset, aRange, bOffset, bRange },
  //   },
  // };

  const randomAB = () => {
    // Sum
    // setA(Math.floor(Math.random() * 250 + 250));
    // setB(Math.floor(Math.random() * 30 + 10));

    // Multiply
    setA(Math.floor(Math.random() * config["aRange"] + config["aOffset"]));
    setB(Math.floor(Math.random() * config["bRange"] + config["bOffset"]));

    const resultField = document.getElementById("result") as HTMLInputElement;
    resultField.value = "?";
    // resultField.focus();
  };

  // For the visual numpad
  const appendDigit = (digit: number) => {
    const resultField = document.getElementById("result") as HTMLInputElement;
    resultField.value = resultField.value + digit;
  };

  // Add action enum
  const saveProblem = (a: number, b: number) => {
    let previousProblem: leProblem = { a, b };
    // Keep previous problems and not ONLY the last problem.
    // const test: Array<leProblem> = previousProblems.push(previousProblem);
    setPreviousProblems([previousProblem]);
  };

  const checkSum = () => {
    const resultField = document.getElementById("result") as HTMLInputElement;
    let res = parseInt(resultField.value);
    if (res === a * b) {
      setAnswerHint("כל הכבוד");
      saveProblem(a, b);
      randomAB();
    } else if (res <= a * b) {
      setAnswerHint("נמוך מידי");
    } else {
      setAnswerHint("גבוה מידי");
    }
    resultField.value = "?";
  };

  useEffect(() => {
    randomAB();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>כאן עושים חשבון</p>
        <p>{` ${a} x ${b} = ? `}</p>
        {answerHint}
        <div className="Answers">
          <input placeholder="?" type="number" id="result" />
          <button onClick={() => checkSum()}>בדוק</button>
        </div>
        <Numpad
          onClick={(digit: number) => {
            appendDigit(digit);
          }}
        />
        {previousProblems.length > 0 && <div> תרגילים קודמים</div>}
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
