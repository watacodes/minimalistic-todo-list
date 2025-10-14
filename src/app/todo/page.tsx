"use client";

import { useEffect, useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { TaskProps } from "./types/types";
import RemainingTodo from "./components/RemainingTodo";

const TodoPage = () => {
  const [todos, setTodos] = useState<TaskProps[]>(() => {
    if (typeof window === "undefined") return [];
    const raw = localStorage.getItem("todos");
    return raw ? JSON.parse(raw) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (task: string) => {
    if (task.trim() === "" || task.length < 4) return;
    const newTodo = { item: task.trim(), id: crypto.randomUUID(), done: false };
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleDelete = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id: string) => {
    setTodos((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div className="h-dvh flex flex-col items-center p-10 text-5xl">
      <h1 className="p-10 text-10xl font-bold">Minimalistic Todo List</h1>
      <NewTodo handleAdd={handleAdd} />
      {!todos.length ? (
        <div>Start adding your tasks ✨</div>
      ) : (
        <>
          <RemainingTodo todos={todos} />
          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        </>
      )}
    </div>
  );
};

export default TodoPage;
