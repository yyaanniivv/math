import React, { useState } from 'react';
import clsx from 'clsx';
import { Collapse, IconButton } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { IProblem } from './common';
import { Problem } from './Problem';
import './HistoricProblems.css';

interface Props {
  problems: Array<IProblem>;
}

function problemKey({ a, b, action }: IProblem) {
  return `${a}${action}${b}`;
}

function HistoricProblems(props: Props) {
  const [toggle, setToggle] = useState(false);
  const problems = props.problems;

  return (
    <div>
      <div className="historic-title">
        <p>{problems.length} :תרגילים קודמים</p>
        <IconButton
          onClick={() => setToggle(!toggle)}
          className={clsx('expand', {
            expandOpen: toggle,
          })}
          size="large"
        >
          <ExpandMoreIcon color="primary" />
        </IconButton>
      </div>
      <Collapse in={toggle}>
        {problems.map((problem) => (
          <Problem key={problemKey(problem)} {...problem} previous />
        ))}
      </Collapse>
    </div>
  );
}

export default HistoricProblems;
