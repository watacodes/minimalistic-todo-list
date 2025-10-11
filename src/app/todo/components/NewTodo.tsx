"use client";

import React from "react";
import { AddProps } from "../types/types";

const NewTodo = ({ handleAdd, task, setTask }: AddProps) => {
  return (
    <form
      className="flex items-center mb-4"
      onSubmit={(e) => {
        e.preventDefault();
        handleAdd(task);
      }}
    >
      <label htmlFor="todo">
        <input
          type="text"
          id="todo"
          className="rounded-4xl text-3xl bg-amber-50 px-16 py-2 mx-4 border-amber-100 border-2"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </label>

      <button
        type="submit"
        className="text-lg text-white font-bold rounded-4xl p-3.5 bg-sky-500 hover:cursor-pointer hover:bg-sky-700"
      >
        Add Todo
      </button>
    </form>
  );
};

export default NewTodo;
