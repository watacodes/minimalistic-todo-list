import { TodoProps, FilterProps } from "../types/types";

export const applyFilter = (todos: TodoProps[], status: FilterProps) => {
  switch (status) {
    case "in-progress":
      return todos.filter((t) => !t.done);
    case "done":
      return todos.filter((t) => t.done);
    default:
      return todos;
  }
};
