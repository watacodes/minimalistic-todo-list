"use client";

import { useMemo } from "react";
import { FilterProps, TodoListProps, TodoProps } from "../../types/types";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const applyFilter = (todos: TodoProps[], status: FilterProps) => {
  switch (status) {
    case "in-progress":
      return todos.filter((t) => !t.done);
    case "done":
      return todos.filter((t) => t.done);
    default:
      return todos;
  }
};

const TodoList = ({
  todos,
  status,
  handleToggle,
  handleDelete,
}: TodoListProps) => {
  const visibleTodos = useMemo(
    () => applyFilter(todos, status),
    [todos, status]
  );

  return (
    <div>
      <ul className="flex flex-col w-full  border-gray-400 rounded-md p-2">
        {!visibleTodos.length && <>Nothing to display.</>}
        {visibleTodos.map(({ item, id, done }) => {
          return (
            <li className="flex items-center justify-between" key={id}>
              <div className="flex">
                <Checkbox
                  checked={done}
                  name={id}
                  id={id}
                  className="m-5"
                  onCheckedChange={() => handleToggle(id)}
                />

                <label
                  htmlFor={id}
                  className={`flex items-center mr-4 h-max ${
                    done ? "line-through" : ""
                  }`}
                >
                  {item}
                </label>
              </div>
              <div>
                <Button variant="outline" aria-label="edit">
                  Edit
                </Button>
                <Button
                  variant="outline"
                  aria-label="remove"
                  onClick={() => handleDelete(id)}
                >
                  Remove
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
