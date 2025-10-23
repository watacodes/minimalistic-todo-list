"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { FilterProps, TodoProps, TodosContextProps } from "../types/types";
import useGlobalKey from "../hooks/useGlobalKey";

const TodosCtx = createContext<TodosContextProps | null>(null);

export const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  useGlobalKey({
    key: "n",
    handler: (e) => {
      const tagName = (e.target as HTMLElement).tagName;

      if (tagName === "INPUT" || tagName === "TEXTAREA") return;
      e.preventDefault();
      console.log("n pressed: ", e);
    },
  });

  const [todos, setTodos] = useState<TodoProps[]>(() => {
    if (typeof window === "undefined") return;
    const raw = localStorage.getItem("todos");
    return raw ? JSON.parse(raw) : [];
  });

  const [status, setStatus] = useState<FilterProps>(() => {
    if (typeof window === "undefined") return;
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
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const handleToggle = (id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const remainingTasks = todos.filter((t) => !t.done).length;

  const completedTasks = todos.filter((t) => t.done).length;

  const value = {
    todos,
    setTodos,
    status,
    setStatus,
    handleAdd,
    handleDelete,
    handleToggle,
    remainingTasks,
    completedTasks,
  };

  return <TodosCtx.Provider value={value}>{children}</TodosCtx.Provider>;
};

export const useTodos = () => {
  const ctx = useContext(TodosCtx);
  if (!ctx) throw new Error("useTodos err");
  return ctx;
};
