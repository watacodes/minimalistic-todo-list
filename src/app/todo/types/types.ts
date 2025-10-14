import { Dispatch, SetStateAction } from "react";

export type AddProps = {
  handleAdd: (task: string) => void;
};

export type TaskProps = {
  item: string;
  id: string;
  done: boolean;
};

export type TodoListProps = {
  handleDelete: (id: string) => void;
  handleToggle: (id: string) => void;
  todos: TaskProps[];
};
