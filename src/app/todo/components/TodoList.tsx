"use client";

import { useState } from "react";
import { TodoListProps } from "../types/types";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Filter from "./FilterButtons";
import { FilterProps } from "../types/types";

const TodoList = ({ todos, handleToggle, handleDelete }: TodoListProps) => {
  // const [filterStatus, setFilterStatus] = useState<FilterProps>("all");

  return (
    <div>
      <Filter />
      <ul className="flex flex-col w-full border-2 border-gray-400 rounded-md p-2">
        {todos.map(({ item, id, done }) => {
          return (
            <li className="flex items-center " key={id}>
              <Checkbox
                checked={done}
                name={id}
                id={id}
                className="m-5"
                onCheckedChange={() => handleToggle(id)}
              />

              <label
                htmlFor={id}
                className={`flex items-center mr-4 h-max${
                  done ? "line-through" : ""
                }`}
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
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
