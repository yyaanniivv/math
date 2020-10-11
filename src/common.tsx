import React from "react";

export interface leProblem {
  a: number;
  b: number;
  action: string;
}

export const printProblem = ({ a, b, action }: leProblem) => {
  return <div key={`${a}${action}${b}`}>{` ${a} ${action} ${b} = ? `}</div>;
};
