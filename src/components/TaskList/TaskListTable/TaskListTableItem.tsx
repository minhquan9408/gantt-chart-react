import React, { useMemo } from 'react';
import { Task } from '../../../types/publicTypes';
import styles from './taskListTable.module.css';

interface TaskListTableItemProps {
  task: Task;
  rowHeight: number;
  rowWidth: string;
  onExpanderClick: (task: Task) => void;
  locale: string;
}
const localeDateStringCache = {};
const toLocaleDateStringFactory =
  (locale: string) =>
  (date: Date, dateTimeOptions: Intl.DateTimeFormatOptions) => {
    const key = date.toString();
    let lds = localeDateStringCache[key];
    if (!lds) {
      lds = date.toLocaleDateString(locale, dateTimeOptions);
      localeDateStringCache[key] = lds;
    }
    return lds;
  };
const dateTimeOptions: Intl.DateTimeFormatOptions = {
  weekday: 'short',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export default function TaskListTableItem(props: TaskListTableItemProps) {
  const { task, rowHeight, rowWidth, locale, onExpanderClick } = props;
  const toLocaleDateString = useMemo(
    () => toLocaleDateStringFactory(locale),
    [locale]
  );
  let expanderSymbol = '';
  if (task.hideChildren === false) {
    expanderSymbol = '▼';
  } else if (task.hideChildren === true) {
    expanderSymbol = '▶';
  }

  return (
    <div
      className={styles.taskListTableRow}
      style={{ height: rowHeight }}
      key={`${task.id}row`}
    >
      <div
        className={styles.taskListCell}
        style={{
          minWidth: rowWidth,
          maxWidth: rowWidth,
        }}
        title={task.name}
      >
        <div className={styles.taskListNameWrapper}>
          <div
            className={
              expanderSymbol
                ? styles.taskListExpander
                : styles.taskListEmptyExpander
            }
            onClick={() => onExpanderClick(task)}
          >
            {expanderSymbol}
          </div>
          <div>{task.name}</div>
        </div>
      </div>
      <div
        className={styles.taskListCell}
        style={{
          minWidth: rowWidth,
          maxWidth: rowWidth,
        }}
      >
        &nbsp;{toLocaleDateString(task.start, dateTimeOptions)}
      </div>
      <div
        className={styles.taskListCell}
        style={{
          minWidth: rowWidth,
          maxWidth: rowWidth,
        }}
      >
        &nbsp;{toLocaleDateString(task.end, dateTimeOptions)}
      </div>
    </div>
  );
}
