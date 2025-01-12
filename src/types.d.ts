import type { TODO_FILTERS } from "./consts.ts";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export type TodoId = Pick<Todo, "id">;
export type TodoTitle = Pick<Todo, "title">;
export type TodoCompleted = Pick<Todo, "completed">;

export type FilterValue = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS];

export type ListOfTodos = Todo[];
