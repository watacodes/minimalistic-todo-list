"use client";

import { useMemo } from "react";
import { useTodos } from "@/app/providers/TodosProvider";
import { applyFilter } from "@/app/utils/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import useEdit from "@/app/hooks/useEdit";

const TodoList = () => {
  const { todos, status, handleToggle, handleDelete } = useTodos();
  const { editingId, draft, setDraft, isEditing, handleEdit, handleSave } =
    useEdit();

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
                {editingId === id && isEditing ? (
                  <input
                    type="text"
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={(e) => handleSave({ id, e })}
                    value={draft}
                    className="focus: border-1 focus: rounded-md"
                    autoFocus
                  />
                ) : (
                  <label
                    htmlFor={id}
                    className={`flex items-center mr-4 h-max ${
                      done ? "line-through" : ""
                    }`}
                  >
                    {item}
                  </label>
                )}
              </div>
              <div className="flex min-w-[160px]">
                <Button
                  variant="outline"
                  aria-label="save"
                  onClick={() =>
                    isEditing ? handleSave({ id }) : handleEdit(id)
                  }
                  className="min-w-[80px] px-2"
                >
                  {isEditing && editingId === id ? "Save" : "Edit"}
                </Button>

                <Button
                  variant="outline"
                  aria-label="remove"
                  onClick={() => {
                    isEditing ? handleEdit(id) : handleDelete(id);
                  }}
                  className="min-w-[80px] px-2"
                >
                  {isEditing && editingId === id ? "Cancel" : "Remove"}
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
