import React, { memo } from 'react';
import { BarTask } from '../../../interfaces/barTask';
import { GanttEvent } from '../../../interfaces/ganttTaskActions';
import { TaskItem, TaskItemProps } from './TaskItem';

interface GanttItemsProps {
  tasks: BarTask[];
  ganttEvent: GanttEvent;
  arrowIndent: number;
  taskHeight: number;
  onProgressChange: any;
  onDateChange: any;
  handleBarEventStart: any;
  selectedTask: BarTask | undefined;
  rtl: boolean;
  scrollY: number;
}
// If performance is down -> useMemo to optimize
// const barMoveActions = ["progress", "end", "start", "move"];
// function taskItemPropsAreEqual(
//     prevTask: TaskItemProps,
//     nextTask: TaskItemProps
// ) {
//     return (
//         (prevTask.isSelected === nextTask.isSelected &&
//             !barMoveActions.includes(prevTask.ganttEvent.action)) ||
//         !barMoveActions.includes(nextTask.ganttEvent.action)
//     );
// }
//
// const MemoizeTaskItem = memo(TaskItem, taskItemPropsAreEqual);

export default function TaskItemList(props: GanttItemsProps) {
  const {
    scrollY,
    tasks,
    ganttEvent,
    arrowIndent,
    taskHeight,
    onDateChange,
    onProgressChange,
    handleBarEventStart,
    selectedTask,
    rtl,
  } = props;

  //TODO: Calculate with dynamic number
  let currentPos = Math.ceil(scrollY / 50);

  return (
    <>
      {tasks.slice(currentPos, currentPos + 20).map((task) => {
        return (
          <TaskItem
            ganttEvent={ganttEvent}
            task={task}
            arrowIndent={arrowIndent}
            taskHeight={taskHeight}
            isProgressChangeable={!!onProgressChange && !task.isDisabled}
            isDateChangeable={!!onDateChange && !task.isDisabled}
            isDelete={!task.isDisabled}
            onEventStart={handleBarEventStart}
            key={task.id}
            isSelected={!!selectedTask && task.id === selectedTask.id}
            rtl={rtl}
          />
        );
      })}
    </>
  );
}
