import React, { memo, useMemo } from 'react';
import { BarTask } from '../../../types/barTask';
import { GanttEvent } from '../../../types/ganttTaskActions';
import { Arrow, ArrowProps } from './Arrow';

export interface ArrowListProps {
  tasks: BarTask[];
  ganttEvent: GanttEvent;
  rowHeight: number;
  taskHeight: number;
  arrowIndent: number;
  rtl: boolean;
  arrowColor: string;
  scrollY: number;
}
function arrowListPropsAreEqual(prevTask: ArrowProps, nextTask: ArrowProps) {
  const barMoveActions = ['progress', 'end', 'start', 'move'];
  return (
    !barMoveActions.includes(prevTask.ganttEvent.action) ||
    !barMoveActions.includes(nextTask.ganttEvent.action)
  );
}
//TODO write recursive function to take only one barChildren to map
const MemoizeArrow = memo(Arrow, arrowListPropsAreEqual);
export default function ArrowList(props: ArrowListProps) {
  const {
    tasks,
    ganttEvent,
    rowHeight,
    taskHeight,
    arrowIndent,
    rtl,
    scrollY,
    arrowColor,
  } = props;

  let currentPos = Math.ceil(scrollY / 50);
  return (
    <g className="arrows" fill={arrowColor} stroke={arrowColor}>
      {tasks.slice(currentPos, currentPos + 20).map((task) => {
        // console.log(task)
        return task.barChildren.map((child) => {
          return (
            <Arrow
              key={`Arrow from ${task.id} to ${tasks[child.index].id}`}
              taskFrom={task}
              taskTo={tasks[child.index]}
              rowHeight={rowHeight}
              taskHeight={taskHeight}
              arrowIndent={arrowIndent}
              rtl={rtl}
              ganttEvent={ganttEvent}
            />
          );
        });
      })}
    </g>
  );
}
