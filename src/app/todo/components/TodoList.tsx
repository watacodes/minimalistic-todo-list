"use client";

import { useMemo } from "react";
import { TodoListProps } from "../../types/types";
import { applyFilter } from "@/app/utils/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useBlur } from "@/app/providers/BlurProvider";

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

  const { isBlur, toggleBlur } = useBlur();

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
                <Button
                  variant="outline"
                  aria-label="edit"
                  onClick={toggleBlur}
                >
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
