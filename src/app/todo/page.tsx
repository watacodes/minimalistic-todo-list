"use client";

import { useEffect, useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { AddHandler, DeleteHandler, TaskProps } from "./types/types";
import RemainingTodo from "./components/RemainingTodo";

const TodoPage = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [todos, setTodos] = useState<TaskProps[]>(() => {
    if (typeof window === "undefined") return [];
    const raw = localStorage.getItem("todos");
    return raw ? JSON.parse(raw) : [];
  });

  const [task, setTask] = useState<string>("");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd: AddHandler = (task) => {
    if (task.trim() === "" || task.length < 4) return;
    const newTodo = { item: task.trim(), id: crypto.randomUUID(), done: false };
    setTodos((prev) => [...prev, newTodo]);
    console.log("task added: ", task);
    setTask("");
  };

  const handleDelete: DeleteHandler = (id) => {
    const targetItem = todos.find((todo) => todo.id === id);
    if (!targetItem?.done) return;
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="h-dvh flex flex-col items-center p-10 text-5xl">
      <h1 className="p-10 text-10xl font-bold">Minimalistic Todo List</h1>
      <NewTodo handleAdd={handleAdd} task={task} setTask={setTask} />
      {!todos.length ? (
        <div>Start adding your tasks ✨</div>
      ) : (
        <>
          <RemainingTodo todos={todos} />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            handleDelete={handleDelete}
          />
        </>
      )}
    </div>
  );
};

export default TodoPage;
