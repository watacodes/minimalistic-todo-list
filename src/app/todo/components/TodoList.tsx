"use client";

import { useMemo } from "react";
import { useTodos } from "@/app/providers/TodosProvider";
import useEdit from "@/app/hooks/useEdit";
import { applyFilter } from "@/app/utils/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import StatusMessage from "./StatusMessage";

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
      <ul className="flex flex-col w-full border-gray-400 rounded-md gap-4">
        {!visibleTodos.length && <StatusMessage />}
        {visibleTodos.map(({ item, id, done }) => {
          const isRowEditing = editingId === id && isEditing;

          return (
            <li className="flex items-center justify-between" key={id}>
              <div className="flex items-center">
                <Checkbox
                  checked={done}
                  name={id}
                  id={id}
                  className="h-4 w-4 mx-4"
                  onCheckedChange={() => handleToggle(id)}
                />
                <div>
                  {isRowEditing ? (
                    <input
                      type="text"
                      onChange={(e) => setDraft(e.target.value)}
                      onKeyDown={(e) => handleSave({ id, e })}
                      value={draft}
                      placeholder={item}
                      className="flex items-center w-full leading-none focus: border-1 focus: rounded-md text-2xl"
                      autoFocus
                    />
                  ) : (
                    <label
                      htmlFor={id}
                      className={`flex items-center mr-4 text-2xl leading-none ${
                        done ? "line-through opacity-50" : ""
                      }`}
                    >
                      {item}
                    </label>
                  )}
                </div>
              </div>
              <div className="flex min-w-[160px] gap-2">
                <Button
                  variant="outline"
                  aria-label="edit or save item"
                  onClick={() =>
                    isEditing ? handleSave({ id }) : handleEdit(id)
                  }
                  className="min-w-[80px] px-2"
                >
                  {isRowEditing ? "Save" : "Edit"}
                </Button>

                <Button
                  variant="outline"
                  aria-label="cancel edit or delete item"
                  onClick={() => {
                    isEditing ? handleEdit(id) : handleDelete(id);
                  }}
                  className="min-w-[80px] px-2 focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  {isRowEditing ? "Cancel" : "Remove"}
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
