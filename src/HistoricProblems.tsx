import React, { useState } from "react";
import clsx from "clsx";
import { Collapse, IconButton } from "@material-ui/core";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import { IProblem } from "./common";
import { Problem } from "./Problem";
import "./HistoricProblems.css";

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
    <div>
      <div className="historic-title">
        <p>{problems.length} :תרגילים קודמים</p>
        <IconButton
          onClick={() => setToggle(!toggle)}
          className={clsx("expand", {
            expandOpen: toggle,
          })}
        >
          <ExpandMoreIcon color="primary" />
        </IconButton>
      </div>
      <Collapse in={toggle}>
        {problems.map((problem) => (
          <Problem key={problemKey(problem)} {...problem} size="small" />
        ))}
      </Collapse>
    </div>
  );
}

export default HistoricProblems;
