import React, { useState } from "react";
import { IProblem } from "./common";
import "./HistoricProblems.css";
import { Problem } from "./Problem";

interface Props {
  problems: Array<IProblem>;
}

function HistoricProblems(props: Props) {
  let [toggle, setToggle] = useState(false);
  const problems = props.problems;
  return (
    <div onClick={() => setToggle(!toggle)}>
      <p>{problems.length} תרגילים קודמים</p>

      {toggle && (
        <div className="historicProblems">
          {problems.map((problem) => (
            <Problem {...problem} size="small" />
          ))}
        </div>
      )}
    </div>
  );
}

export default HistoricProblems;
