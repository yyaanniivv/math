import React from "react";

export interface IProblem {
  a: number;
  b: number;
  action: string;
}

export interface IConfig {
  aRange: number;
  aOffset: number;
  bRange: number;
  bOffset: number;
}

export type NumpadChar = "<" | number;

// TODO - move this to a component
export const printProblem = ({ a, b, action }: IProblem) => {
  return <div key={`${a}${action}${b}`}>{` ${a} ${action} ${b} = ? `}</div>;
};
