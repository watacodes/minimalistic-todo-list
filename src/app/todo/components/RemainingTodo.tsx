"use client";

import { TaskProps } from "../types/types";

type RemainingTodoProps = {
  todos: TaskProps[];
};

const RemainingTodo = ({ todos }: RemainingTodoProps) => {
  const remainingTasks = todos.filter((t) => !t.done).length;

  return (
    <div className="bg-red-50 mb-4">Remaining Tasks: {remainingTasks}</div>
  );
};

export default RemainingTodo;
