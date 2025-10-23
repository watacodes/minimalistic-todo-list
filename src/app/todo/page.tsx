"use client";

import { useTodos } from "../providers/TodosProvider";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import TodoStatus from "./components/TodoStatus";

const TodoPage = () => {
  const { todos } = useTodos();
  return (
    <div className="h-dvh w-full flex flex-col items-center p-10 text-5xl">
      <h1 className="p-10 text-5xl font-bold">Minimalistic Todo List</h1>
      <NewTodo />
      {!todos?.length ? (
        <div>Start adding your tasks ✨</div>
      ) : (
        <main className="w-3/4">
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
