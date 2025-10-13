"use client";

import { AddProps } from "../types/types";
import { Button } from "@/components/ui/button";

const NewTodo = ({ handleAdd, task, setTask }: AddProps) => {
  return (
    <form
      className="flex items-center mb-10"
      onSubmit={(e) => {
        e.preventDefault();
        handleAdd(task);
      }}
    >
      <label htmlFor="addTodo">
        <input
          type="text"
          id="addTodo"
          className="rounded-4xl text-3xl px-16 py-2 mx-4 border-2"
          value={task}
          onChange={(e) => setTask(e.target.value)}
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
