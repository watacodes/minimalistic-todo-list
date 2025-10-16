"use client";

import { useState, useEffect } from "react";
import { TodoProps, FilterProps } from "../types/types";

const useTodos = () => {
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
    const text = task.trim();
    if (text === "" || text.length < 4) return;
    const newTodo = { item: text, id: crypto.randomUUID(), done: false };
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

  return {
    todos,
    status,
    setStatus,
    handleAdd,
    handleDelete,
    handleToggle,
  };
};

export default useTodos;
