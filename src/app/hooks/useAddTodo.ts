"use client";

import { useRef, useState, FormEvent } from "react";
import { useTodos } from "../providers/TodosProvider";
import useGlobalKey from "./useGlobalKey";

export const useAddTodo = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { handleAdd } = useTodos();
  const [newTask, setNewTask] = useState<string>("");

  useGlobalKey({
    key: "n",
    handler: (e) => {
      const target = e.target as HTMLElement;

      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
        if (target === inputRef.current) {
          e.preventDefault();
          inputRef.current?.blur();
        }
        return;
      }

      e.preventDefault();
      inputRef.current?.focus();
    },
  });

  useGlobalKey({
    key: "Escape",
    handler: (e) => {
      const active = document.activeElement as HTMLElement | null;

      if (active && active === inputRef.current) {
        e.preventDefault();
        inputRef.current?.blur();
      }
    },
  });

  const handleEdit = (text: string) => {
    const todo = text.trim();
    setNewTask(() => todo);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAdd(newTask);
    setNewTask("");
  };

  return { inputRef, handleAdd, newTask, handleEdit, handleSubmit };
};
