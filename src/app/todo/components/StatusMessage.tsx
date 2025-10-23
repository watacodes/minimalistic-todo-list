import { useTodos } from "@/app/providers/TodosProvider";

const StatusMessage = () => {
  const { remainingTasks, completedTasks } = useTodos();

  return <div>{remainingTasks === 0 && <>You completed all the tasks!</>}</div>;
};

export default StatusMessage;
