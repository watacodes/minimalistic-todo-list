"use client";

import { useTodos } from "../providers/TodosProvider";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import TodoStatus from "./components/TodoStatus";
import StatusMessage from "./components/StatusMessage";

const TodoPage = () => {
  const { isAnyTodos } = useTodos();

  return (
    <div className="h-dvh w-full flex flex-col items-center p-10 text-5xl">
      <h1 className="p-10 text-5xl font-bold">Minimalistic Todo List</h1>
      <NewTodo />
      {!isAnyTodos ? (
        <>Start adding your tasks 📈</>
      ) : (
        <main className="w-1/2">
          <TodoStatus />
          <section>
            <FilterButtons />
            <TodoList />
          </section>
        </main>
      )}
    </div>
  );
};

export default TodoPage;
