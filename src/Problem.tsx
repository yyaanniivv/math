import React from "react";
import { IProblem } from "./common";

import "./Problem.css";

type IPrintProblem = IProblem & {
  previous?: boolean;
};

export function Problem({ a, b, action, previous }: IPrintProblem) {
  const classes = previous ? "previous" : "problem";
  return <div className={classes}>
    {` ${a} ${action} ${b} = ? `}
  </div>;
}
