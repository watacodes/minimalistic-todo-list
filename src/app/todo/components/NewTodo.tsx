"use client";

import { Button } from "@/components/ui/button";
import { useAddTodo } from "@/app/hooks/useAddTodo";

const NewTodo = () => {
  const { inputRef, newTask, handleSubmit, handleEdit } = useAddTodo();

  return (
    <form
      className="flex items-center justify-center mb-10 w-2/3"
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
        className="p-6 font-bold border-2 rounded-4xl"
      >
        Add Todo
      </Button>
    </form>
  );
};

export default NewTodo;
