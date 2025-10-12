"use client";

import { useState } from "react";
import NewTodo from "./components/NewTodo";
import { TodoList } from "./components/TodoList";
import { AddHandler, TaskProps } from "./types/types";

export const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<TaskProps[]>([]);
  const [task, setTask] = useState<string>("");

  const handleAdd: AddHandler = (task) => {
    if (task.trim() === "" || task.length < 4) return;
    const newTodo = { item: task.trim(), id: crypto.randomUUID(), done: false };
    setTodos((prev) => [...prev, newTodo]);
    console.log("task added: ", task);
    setTask("");
  };

  return (
    <div className="h-dvh flex flex-col items-center p-10 text-5xl">
      <h1 className="p-10">Minimalistic Todo List</h1>
      <NewTodo handleAdd={handleAdd} task={task} setTask={setTask} />
      {!todos.length ? (
        <div>Start adding your tasks ✨</div>
      ) : (
        <TodoList todo={todos} setTodo={setTodos} />
      )}
    </div>
  );
};
