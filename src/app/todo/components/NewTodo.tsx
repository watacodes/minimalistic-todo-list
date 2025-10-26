"use client";

import { FormEvent, useState, useRef } from "react";
import useGlobalKey from "@/app/hooks/useGlobalKey";
import { useTodos } from "@/app/providers/TodosProvider";
import { Button } from "@/components/ui/button";

const NewTodo = () => {
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
    console.log(text);
    const todo = text.trim();
    setNewTask((prev) => todo);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAdd(newTask);
    setNewTask("");
  };

  return (
    <form
      className="flex items-center justify-center mb-10 w-full"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label htmlFor="addTodo" className="flex min-w-2/3">
        <input
          type="text"
          id="addTodo"
          placeholder="add your task (only >= 4 characters accepted)"
          className="w-full px-12 py-2 mx-4 border-2 rounded-4xl text-3xl placeholder-gray-300"
          value={newTask}
          ref={inputRef}
          onChange={(e) => handleEdit(e.target.value)}
        />
      </label>

      <Button
        variant="outline"
        size="lg"
        aria-label="Submit"
        type="submit"
        className="py-6 font-bold border-2 rounded-3xl"
      >
        Add Todo
      </Button>
    </form>
  );
};

export default NewTodo;
