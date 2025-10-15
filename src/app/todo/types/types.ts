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
