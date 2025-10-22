"use client";

import { useTodos } from "../providers/TodosProvider";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import RemainingTodo from "./components/RemainingTodo";
import FilterButtons from "./components/FilterButtons";

const TodoPage = () => {
  const { todos } = useTodos();

  return (
    <div className="h-dvh w-full flex flex-col items-center p-10 text-5xl">
      <h1 className="p-10 text-4xl font-bold">Minimalistic Todo List</h1>
      <NewTodo />
      {!todos?.length ? (
        <div>Start adding your tasks ✨</div>
      ) : (
        <section className="w-3/4">
          <RemainingTodo />
          <div className="">
            <FilterButtons />
            <TodoList />
          </div>
        </section>
      )}
    </div>
  );
};

export default TodoPage;
