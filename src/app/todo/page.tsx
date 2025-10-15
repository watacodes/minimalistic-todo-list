"use client";

import { useEffect, useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import RemainingTodo from "./components/RemainingTodo";
import FilterButtons from "./components/FilterButtons";
import { FilterProps, TodoProps } from "./types/types";

const TodoPage = () => {
  const [todos, setTodos] = useState<TodoProps[]>(() => {
    if (typeof window === "undefined") return [];
    const raw = localStorage.getItem("todos");
    return raw ? JSON.parse(raw) : [];
  });

  const [status, setStatus] = useState<FilterProps>(() => {
    if (typeof window === "undefined") return "all";
    const raw = localStorage.getItem("status");
    return raw ? JSON.parse(raw) : "all";
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("status", JSON.stringify(status));
  }, [todos, status]);

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
    <div className="h-dvh w-full flex flex-col items-center p-10 text-5xl">
      <h1 className="p-10 text-4xl font-bold">Minimalistic Todo List</h1>
      <NewTodo handleAdd={handleAdd} />
      {!todos.length ? (
        <div>Start adding your tasks ✨</div>
      ) : (
        <section className="w-3/4">
          <RemainingTodo todos={todos} />
          <div className="">
            <FilterButtons status={status} setStatus={setStatus} />
            <TodoList
              todos={todos}
              status={status}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />
          </div>
        </section>
      )}
    </div>
  );
};

export default TodoPage;
