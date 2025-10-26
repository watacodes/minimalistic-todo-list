import { useTodos } from "@/app/providers/TodosProvider";

const StatusMessage = () => {
  const { remainingTasks, completedTasks } = useTodos();

  return (
    <div className="flex items-center justify-center w-full p-10 text-4xl">
      {remainingTasks === 0 && <>You completed all the tasks!</>}
    </div>
  );
};

export default StatusMessage;
