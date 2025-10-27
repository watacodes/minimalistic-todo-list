"use client";

import { useMemo } from "react";
import { useTodos } from "@/app/providers/TodosProvider";
import { applyFilter } from "@/app/utils/utils";
import { Checkbox } from "@/components/ui/checkbox";
import StatusMessage from "./StatusMessage";
import ButtonGroup from "./ButtonGroup";
import TaskNameGroup from "./TaskNameGroup";
import { TodoRowProvider, useRow } from "@/app/providers/TodoRowCtx";

const TodoList = () => {
  const { todos, status, handleToggle } = useTodos();

  const visibleTodos = useMemo(
    () => applyFilter(todos, status),
    [todos, status]
  );

  return (
    <div>
      <ul className="flex flex-col w-full border-gray-400 rounded-md gap-4">
        {!visibleTodos.length && <StatusMessage />}
        {visibleTodos.map(({ item, id, done }) => {
          return (
            <li className="flex items-center justify-between" key={id}>
              <TodoRowProvider id={id} item={item}>
                <div className="flex items-center">
                  <Checkbox
                    checked={done}
                    id={id}
                    className="h-4 w-4 mx-4"
                    onCheckedChange={() => handleToggle(id)}
                  />
                  <TaskNameGroup done={done} />
                </div>
                <ButtonGroup />
              </TodoRowProvider>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
