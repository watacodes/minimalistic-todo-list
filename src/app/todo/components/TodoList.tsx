"use client";

import { useState } from "react";

import { ItemProps, TodoListProps } from "../types/types";

export const TodoList = ({ todo }: TodoListProps) => {
  // Sets a default Set object, which only takes the unique set of items?

  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());

  // Toggle handler takes the id of the item and the checked status.
  // prev stands for the newly added entries?
  // if the box is clicked (e.target.checked), along with the id of the item, it will be passed into handleToggle.
  // declare the next and make a new Set of id and checked?
  // if checked is true, its id will be added to next (.add is a unique method for Set objects?)
  // if not, delete the id of next (but not sure why we need this condition)
  // return next = new Set of an id?

  const handleToggle = ({ id, checked }: ItemProps) => {
    setCompletedIds((prev) => {
      const next = new Set(prev);
      if (checked) next.add(id);
      else next.delete(id);
      return next;
    });
  };

  return (
    <div className="flex flex-col">
      {todo.map(({ item, id }) => {
        const isDone = completedIds.has(id);
        return (
          <div className="flex items-center" key={id}>
            <input
              type="checkbox"
              value={item}
              name={item}
              checked={isDone}
              className="m-5 flex items-center"
              onChange={(e) => handleToggle({ id, checked: e.target.checked })}
            />
            <label
              htmlFor={id}
              className={`flex items-center ${
                isDone ? "line-through" : "none"
              }`}
            >
              {item}
            </label>
          </div>
        );
      })}
    </div>
  );
};
