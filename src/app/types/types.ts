import { Dispatch, SetStateAction } from "react";

export type FilterProps = "all" | "in-progress" | "done";

export type AddProps = {
  handleAdd: (task: string) => void;
};

export type TodoProps = {
  item: string;
  id: string;
  done: boolean;
};

export type TodoListProps = {
  handleDelete: (id: string) => void;
  handleToggle: (id: string) => void;
  todos: TodoProps[];
  status: FilterProps;
};

export type useTodosProps = {
  todos: TodoProps[];
  status: FilterProps;
  setStatus: Dispatch<SetStateAction<FilterProps>>;
  handleAdd: (task: string) => void;
  handleDelete: (id: string) => void;
  handleToggle: (id: string) => void;
};
