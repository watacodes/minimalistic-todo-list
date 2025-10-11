import { Dispatch, SetStateAction } from "react";

export type AddProps = {
  handleAdd: (text: string) => void;
  setTask: Dispatch<SetStateAction<string>>;
  task: string;
};

export type TaskProps = {
  item: string;
  id: string;
  done: boolean;
};

export type ItemProps = {
  id: string;
  checked: boolean;
};

export type TodoListProps = {
  todo: TaskProps[];
};
