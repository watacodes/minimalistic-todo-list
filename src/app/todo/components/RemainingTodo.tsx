"use client";

import { useEffect, useState } from "react";
import { TaskProps } from "../types/types";

type RemainingTodoProps = {
  todos: TaskProps[];
};

const RemainingTodo = ({ todos }: RemainingTodoProps) => {
  const [remainingTasks, setRemainingTasks] = useState<number>(
    () => todos.filter((t) => !t.done).length
  );

  useEffect(() => {
    setRemainingTasks(todos.filter((t) => !t.done).length);
  }, [todos]);

  return (
    <div className="bg-red-50 mb-4">Remaining Tasks: {remainingTasks}</div>
  );
};

export default RemainingTodo;
