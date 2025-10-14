"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { TodoListProps } from "../types/types";
import { Button } from "@/components/ui/button";

const TodoList = ({ todos, handleToggle, handleDelete }: TodoListProps) => {
  return (
    <div className="flex flex-col border-2 border-gray-400 rounded-md w-full p-2">
      {todos.map(({ item, id, done }) => {
        return (
          <div className="flex items-center " key={id}>
            <Checkbox
              checked={done}
              name={id}
              id={id}
              className="m-5"
              onCheckedChange={() => handleToggle(id)}
            />

            <label
              htmlFor={id}
              className={`flex items-center ${
                done ? "line-through" : ""
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

export default TodoList;
