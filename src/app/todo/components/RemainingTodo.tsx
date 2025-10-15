"use client";

import { TodoProps } from "../types/types";

type RemainingTodoProps = {
  todos: TodoProps[];
};

const RemainingTodo = ({ todos }: RemainingTodoProps) => {
  const remainingTasks = todos.filter((t) => !t.done).length;

  return (
    <div className="mb-4" aria-live="polite">
      Remaining Tasks: {remainingTasks}
    </div>
  );
};

export default RemainingTodo;
