import React, { useState } from "react";
import { IProblem } from "./common";
import { Problem } from "./Problem";

interface Props {
  problems: Array<IProblem>;
}

function problemKey({ a, b, action }: IProblem) {
  return `${a}${action}${b}`;
}

function HistoricProblems(props: Props) {
  let [toggle, setToggle] = useState(false);
  const problems = props.problems;

  return (
    <div onClick={() => setToggle(!toggle)}>
      <p>{problems.length} תרגילים קודמים</p>

      {toggle &&
        problems.map((problem) => <Problem key={problemKey(problem)} {...problem} size="small" />)}
    </div>
  );
}

export default HistoricProblems;
