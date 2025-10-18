import { FilterProps, TodoProps } from "../types/types";
import { useEffect, useState } from "react";

const useTodos = () => {
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

  return { todos, status, setStatus, handleAdd, handleDelete, handleToggle };
};

export default useTodos;
