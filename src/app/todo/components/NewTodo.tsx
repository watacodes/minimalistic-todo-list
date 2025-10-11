import React, { useState } from "react";
import { AddProps } from "../types/types";

const NewTodo = ({ handleAdd, task, setTask }: AddProps) => {
  return (
    <div className="flex items-center mb-4">
      <label htmlFor="todo">
        <input
          type="text"
          id="todo"
          className="rounded-4xl text-4xl bg-amber-50 p-2 mx-4 border-amber-100 border-2"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </label>

      <input
        type="button"
        value="Add Todo"
        className="text-2xl font-bold rounded-4xl p-3 bg-cyan-200"
        onClick={() => handleAdd(task)}
      />
    </div>
  );
};

export default NewTodo;
