"use client";

import { useTodos } from "@/app/providers/TodosProvider";

const RemainingTodo = () => {
  const { todos } = useTodos();
  const remainingTasks = todos.filter((t) => !t.done).length;

  return (
    <div className="mb-4 text-2xl" aria-live="polite">
      Remaining Tasks: {remainingTasks}
    </div>
  );
};

export default RemainingTodo;
