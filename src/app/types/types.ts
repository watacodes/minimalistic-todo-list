import { Dispatch, SetStateAction } from "react";

export type FilterProps = "in-progress" | "done";

export type TodoProps = {
  item: string;
  id: string;
  done: boolean;
};

export type TodoListProps = {
  todos: TodoProps[];
  status: FilterProps;
  handleDelete: (id: string) => void;
  handleToggle: (id: string) => void;
};

export type TodosContextProps = {
  todos: TodoProps[];
  setTodos: Dispatch<SetStateAction<TodoProps[]>>;
  status: FilterProps;
  setStatus: Dispatch<SetStateAction<FilterProps>>;
  handleAdd: (task: string) => void;
  handleDelete: (id: string) => void;
  handleToggle: (id: string) => void;
  remainingTasks: number;
  completedTasks: number;
};
