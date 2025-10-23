"use client";

import { useTodos } from "@/app/providers/TodosProvider";

const TodoStatus = () => {
  const { remainingTasks, completedTasks } = useTodos();

  return (
    <div className="flex mb-4">
      <div className="mr-4 text-2xl" aria-live="polite">
        Remaining Tasks: {remainingTasks}
      </div>
      <div className="text-2xl" aria-live="polite">
        Completed Tasks: {completedTasks}
      </div>
    </div>
  );
};

export default TodoStatus;
