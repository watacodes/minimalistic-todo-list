import { Dispatch, SetStateAction } from "react";

export type FilterProps = "all" | "in-progress" | "done";

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

export type TodosContextProps = {
  todos: TodoProps[];
  setTodos: Dispatch<SetStateAction<TodoProps[]>>;
  status: FilterProps;
  setStatus: Dispatch<SetStateAction<FilterProps>>;
  handleAdd: (task: string) => void;
  handleDelete: (id: string) => void;
  handleToggle: (id: string) => void;
};
