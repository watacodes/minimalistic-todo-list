"use client";

import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import RemainingTodo from "./components/RemainingTodo";
import FilterButtons from "./components/FilterButtons";
import useTodos from "../hooks/useTodos";

const TodoPage = () => {
  const { todos, status, setStatus, handleAdd, handleDelete, handleToggle } =
    useTodos();

  return (
    <div className="h-dvh w-full flex flex-col items-center p-10 text-5xl">
      <h1 className="p-10 text-4xl font-bold">Minimalistic Todo List</h1>
      <NewTodo handleAdd={handleAdd} />
      {!todos.length ? (
        <div>Start adding your tasks ✨</div>
      ) : (
        <section className="w-3/4">
          <RemainingTodo todos={todos} />
          <div className="">
            <FilterButtons status={status} setStatus={setStatus} />
            <TodoList
              todos={todos}
              status={status}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />
          </div>
        </section>
      )}
    </div>
  );
};

export default TodoPage;
