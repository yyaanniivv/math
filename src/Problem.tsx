import React from "react";
import { IProblem } from "./common";

type IPrintProblem = IProblem & {
  size?: string;
};

export function Problem({ a, b, action, size }: IPrintProblem) {
  return <div key={`${a}${action}${b}`}>{` ${a} ${action} ${b} = ? `}</div>;
}
