import React from 'react';
import { TaskListHeaderProps } from '../components/TaskList/TaskListHeader/TaskListHeader';
import { TaskListTableProps } from '../components/TaskList/TaskListTable/TaskListTable';

export enum ViewMode {
  Hour = 'Hour',
  QuarterDay = 'Quarter Day',
  HalfDay = 'Half Day',
  Day = 'Day',
  /** ISO-8601 week */
  Week = 'Week',
  Month = 'Month',
}
export type TaskType = 'task' | 'milestone' | 'project';
export interface Task {
  id: string;
  type: TaskType;
  name: string;
  start: Date;
  end: Date;
  /**
   * From 0 to 100
   */
  progress: number;
  styles?: {
    backgroundColor?: string;
    backgroundSelectedColor?: string;
    progressColor?: string;
    progressSelectedColor?: string;
  };
  isDisabled?: boolean;
  project?: string;
  dependencies?: string[];
  hideChildren?: boolean;
}

export interface EventOption {
  /**
   * Zeitschrittwert für Datumsänderungen.
   */
  timeStep?: number;

  /**
   * Ruft bei Bar Select on Unselect auf.
   */
  onSelect?: (task: Task, isSelected: boolean) => void;

  /**
   * Wird bei einem Doppelklick auf die Leiste aufgerufen.
   */
  onDoubleClick?: (task: Task) => void;

  /**
   * Wird bei Änderung der End- und Startzeit aufgerufen.
   */
  onDateChange?: (
    task: Task,
    children: Task[]
  ) => void | boolean | Promise<void> | Promise<boolean>;

  /**
   * Ruft bei Fortschrittsänderung auf.
   */
  onProgressChange?: (
    task: Task,
    children: Task[]
  ) => void | boolean | Promise<void> | Promise<boolean>;

  /**
   * Ruft zum Löschen der ausgewählten Aufgabe auf.
   */
  onDelete?: (task: Task) => void | boolean | Promise<void> | Promise<boolean>;

  /**
   * Ruft den Expander auf der Aufgabenliste auf
   */
  onExpanderClick?: (task: Task) => void;
}

export interface DisplayOption {
  /**
   * Gibt den Ansichtsmodus an.
   */
  viewMode?: ViewMode;

  /**
   * Gibt die Sprache des Monatsnamens an.
   */
  locale?: string;

  /**
   * Gibt an, ob die Balken von rechts nach links dargestellt werden sollen
   */
  rtl?: boolean;

  viewDate?: Date;
}

export interface StylingOption {
  headerHeight?: number;
  columnWidth?: number;
  listCellWidth?: string;
  rowHeight?: number;
  ganttHeight?: number;
  barCornerRadius?: number;
  handleWidth?: number;
  fontFamily?: string;
  fontSize?: string;
  /**
   * How many of row width can be taken by task.
   * From 0 to 100
   */
  barFill?: number;
  barProgressColor?: string;
  barProgressSelectedColor?: string;
  barBackgroundColor?: string;
  barBackgroundSelectedColor?: string;
  projectProgressColor?: string;
  projectProgressSelectedColor?: string;
  projectBackgroundColor?: string;
  projectBackgroundSelectedColor?: string;
  milestoneBackgroundColor?: string;
  milestoneBackgroundSelectedColor?: string;
  arrowColor?: string;
  arrowIndent?: number;
  todayColor?: string;
  TooltipContent?: React.FC<{
    task: Task;
    fontSize: string;
    fontFamily: string;
  }>;
  TaskListHeader?: React.FC<TaskListHeaderProps>;
  TaskListTable?: React.FC<TaskListTableProps>;
}

export interface GanttProps extends EventOption, DisplayOption, StylingOption {
  tasks: Task[];
}
