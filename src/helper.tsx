import { Task } from './types/publicTypes';

//TEST TASK LIST WITH 10K ENTRIES

export function createTaskList(numberEntries: number): Task[] {
  const currentDate = new Date();
  let list: Task[] = [];
  for (let i = 0; i < numberEntries; i++) {
    let task: Task = {
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
      id: `task ${i}`,
      name: `task-name ${i}`,
      progress: 30,
      type: 'task',
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
    };
    list.push(task);
  }
  return list;
}

export function initTasks() {
  const currentDate = new Date();
  let tasks: Task[] = [
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 20),
      name: 'Bachelor thesis',
      id: 'ProjectSample',
      progress: 25,
      type: 'project',
      hideChildren: false,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        2,
        12,
        28
      ),
      name: 'Idea',
      id: 'Task 0',
      progress: 45,
      type: 'task',
      project: 'ProjectSample',
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
      name: 'Research',
      id: 'Task 1',
      progress: 25,
      dependencies: ['Task 0'],
      type: 'task',
      isDisabled: true,
      project: 'ProjectSample',
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
      name: 'Writing',
      id: 'Task 2',
      progress: 10,
      dependencies: ['Task 1'],
      type: 'task',
      project: 'ProjectSample',
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
      name: 'Developing',
      id: 'Task 3',
      progress: 2,
      dependencies: ['Task 2'],
      type: 'task',
      project: 'ProjectSample',
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
      name: 'Review',
      id: 'Task 4',
      type: 'task',
      progress: 70,
      dependencies: ['Task 2'],
      project: 'ProjectSample',
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 20),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 20),
      name: 'Delivery',
      id: 'Task 6',
      progress: currentDate.getMonth(),
      type: 'milestone',
      dependencies: ['Task 4'],
      project: 'ProjectSample',
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
      name: 'Party Time',
      id: 'Task 9',
      progress: 0,
      // isDisabled: true,
      type: 'task',
    },
  ];
  // for (let i = 10; i < 10000; i++) {
  //   tasks = tasks.concat([
  //     {
  //       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
  //       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
  //       name: `Review ${i}`,
  //       id: `Task ${i}`,
  //       type: 'task',
  //       progress: 70,
  //       dependencies: [`Task ${i - 1}`],
  //       project: 'ProjectSample',
  //     },
  //   ]);
  // }
  return tasks;
}

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
  const projectTasks = tasks.filter((t) => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}
