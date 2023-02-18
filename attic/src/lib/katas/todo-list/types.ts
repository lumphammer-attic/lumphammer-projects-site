export interface ToDoItem {
  // id: string;
  label: string;
  completed: boolean;
}

export type ToDoItemDict = { [id: string]: ToDoItem };

export enum DisplayMode {
  completed,
  notCompleted,
  both
}