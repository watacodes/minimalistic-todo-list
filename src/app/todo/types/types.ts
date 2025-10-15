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
};

export type FilterProps = {
  status: "all" | "in-progress" | "completed";
};
