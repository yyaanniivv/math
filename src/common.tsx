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
