import React, { useState } from "react";
import { leProblem, printProblem } from "./common";
import "./HistoricProblems.css";

interface Props {
  problems: Array<leProblem>;
}

function HistoricProblems(props: Props) {
  let [toggle, setToggle] = useState(false);
  const problems = props.problems;
  return (
    <div onClick={() => setToggle(!toggle)}>
      <p>{problems.length} תרגילים קודמים</p>

      {toggle && (
        <div className="historicProblems">{problems.map((problem) => printProblem(problem))}</div>
      )}
    </div>
  );
}

export default HistoricProblems;
