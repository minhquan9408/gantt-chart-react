import React, { memo } from 'react';
import { GridBody, GridBodyProps } from './GridBody';

export type GridProps = GridBodyProps;
export const Grid: React.FC<GridProps> = (props) => {
  return (
    <g className="grid">
      <MemoizeGridBody {...props} />
    </g>
  );
};
//TODO: Refactor + check isEqual function()
const isEqual = (prevTasks: GridBodyProps, nextTasks: GridBodyProps) => {
  console.log('prev' + prevTasks.viewMode + 'next' + nextTasks.viewMode);

  return prevTasks.viewMode === nextTasks.viewMode;
};
const MemoizeGridBody = memo(GridBody, isEqual);
