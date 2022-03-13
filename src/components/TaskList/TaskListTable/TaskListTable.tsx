import React from 'react';
import styles from './taskListTable.module.css';
import { Task } from '../../../types/publicTypes';
import { GanttEvent } from '../../../types/ganttTaskActions';
import TaskListTableItem from './TaskListTableItem';

//Can use useMemo to optimize performance
// const barMoveActions = ['progress', 'end', 'start', 'move'];
// function taskItemPropsAreEqual(
//   prevTask: TaskItemProps,
//   nextTask: TaskItemProps
// ) {
//   return (
//     (prevTask.isSelected === nextTask.isSelected &&
//       !barMoveActions.includes(prevTask.ganttEvent.action)) ||
//     !barMoveActions.includes(nextTask.ganttEvent.action)
//   );
// }
//
// const MemoizeTaskItem = memo(TaskItem, taskItemPropsAreEqual);

export interface TaskListTableProps {
  scrollY: number;
  ganttEvent: GanttEvent;
  rowHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
  locale: string;
  tasks: Task[];
  selectedTaskId: string;
  setSelectedTask: (taskId: string) => void;
  onExpanderClick: (task: Task) => void;
}

export const TaskListTable: React.FC<TaskListTableProps> = ({
  scrollY,
  // ganttEvent,
  rowHeight,
  rowWidth,
  tasks,
  fontFamily,
  fontSize,
  locale,
  onExpanderClick,
}) => {
  let currentPos = Math.ceil(scrollY / 50);
  return (
    <div
      className={styles.taskListWrapper}
      style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
      }}
    >
      {tasks.slice(currentPos, currentPos + 10).map((task) => {
        return (
          <TaskListTableItem
            key={task.id}
            task={task}
            rowHeight={rowHeight}
            rowWidth={rowWidth}
            onExpanderClick={onExpanderClick}
            locale={locale}
          />
        );
      })}
    </div>
  );
};
