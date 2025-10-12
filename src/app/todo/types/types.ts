import { Dispatch, SetStateAction } from "react";

export type AddHandler = (task: string) => void;

export type AddProps = {
  handleAdd: AddHandler;
  task: string;
  setTask: Dispatch<SetStateAction<string>>;
};

export type TaskProps = {
  item: string;
  id: string;
  done: boolean;
};

export type ItemProps = {
  id: string;
  done: boolean;
};

export type TodoListProps = {
  todo: TaskProps[];
  setTodo: Dispatch<SetStateAction<TaskProps[]>>;
};
