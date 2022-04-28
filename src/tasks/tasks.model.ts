/* eslint-disable prettier/prettier */
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PREOGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
