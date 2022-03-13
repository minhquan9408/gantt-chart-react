import React, { memo } from 'react';
import { GridBody, GridBodyProps } from './GridBody';

export const Grid: React.FC<GridBodyProps> = (props) => {
  return (
    <g className="grid">
      <MemoizeGridBody {...props} />
    </g>
  );
};
//TODO: Refactor + check isEqual function()
function isEqual  (prevProps: GridBodyProps, nextProps: GridBodyProps)  {
  console.log(prevProps.svgWidth);
  console.log(nextProps.svgWidth);
  console.log(prevProps.tasks === nextProps.tasks);

  return prevProps.svgWidth === nextProps.svgWidth;
  // prevProps.viewMode === nextProps.viewMode

  // return false;
};
const MemoizeGridBody = memo(GridBody, isEqual);
