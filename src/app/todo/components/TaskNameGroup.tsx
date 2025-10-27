import { useRow } from "@/app/providers/TodoRowCtx";

type TaskNameType = {
  done: boolean;
};

const TaskNameGroup = ({ done }: TaskNameType) => {
  const { id, item, isEditing, draft, setDraft, handleSave } = useRow();

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => handleSave({ id, e })}
          value={draft}
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
  );
};

export default TaskNameGroup;
