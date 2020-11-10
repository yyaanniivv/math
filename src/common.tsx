import React from "react";

export interface IProblem {
  a: number;
  b: number;
  action: Action;
}

export interface IConfig {
  aRange: number;
  aOffset: number;
  bRange: number;
  bOffset: number;
}
export type Action =  "x" | ":" | "+" | "-";
export type NumpadChar = "✅" | "⌫" | number;
