"use client";

import { ItemProps, TodoListProps } from "../types/types";
import { Button } from "@/components/ui/button";

export const TodoList = ({ todo, setTodo, handleDelete }: TodoListProps) => {
  const handleToggle = ({ id, done }: ItemProps) => {
    setTodo((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div className="flex flex-col border-2 border-gray-400 rounded-md w-full">
      {todo.map(({ item, id, done }) => {
        return (
          <div className="flex items-center " key={id}>
            <input
              type="checkbox"
              value={item}
              id={id}
              checked={done}
              className="m-5 flex items-center"
              onChange={(e) => handleToggle({ id, done: e.target.checked })}
            />
            <label
              htmlFor={id}
              className={`flex items-center ${
                done ? "line-through" : "none"
              } mr-4 h-max`}
            >
              {item}
            </label>
            <Button
              variant="outline"
              aria-label="remove"
              onClick={() => handleDelete(id)}
            >
              Remove
            </Button>
          </div>
        );
      })}
    </div>
  );
};
