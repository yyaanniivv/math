import React from "react";
import { IProblem } from "./common";

import "./Problem.css";

type IPrintProblem = IProblem & {
  size?: string;
};

export function Problem({ a, b, action, size }: IPrintProblem) {
  const classes = size === "small" ? size : "";
  return <div className={classes}>{` ${a} ${action} ${b} = ? `}</div>;
}
