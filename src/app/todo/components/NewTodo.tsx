"use client";

import { useState } from "react";
import { AddProps } from "../../types/types";
import { Button } from "@/components/ui/button";

const NewTodo = ({ handleAdd }: AddProps) => {
  const [newTask, setNewTask] = useState<string>("");

  return (
    <form
      className="flex items-center mb-10"
      onSubmit={(e) => {
        e.preventDefault();
        handleAdd(newTask);
        setNewTask("");
      }}
    >
      <label htmlFor="addTodo">
        <input
          type="text"
          id="addTodo"
          placeholder="add your task..."
          className="rounded-4xl text-3xl px-16 py-2 mx-4 border-2"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          autoFocus
        />
      </label>

      <Button
        variant="outline"
        size="lg"
        aria-label="Submit"
        type="submit"
        className="py-6 font-bold border-2"
      >
        Add Todo
      </Button>
    </form>
  );
};

export default NewTodo;
