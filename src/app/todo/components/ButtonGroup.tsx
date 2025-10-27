import { useRow } from "@/app/providers/TodoRowCtx";
import { useTodos } from "@/app/providers/TodosProvider";
import { Button } from "@/components/ui/button";

const ButtonGroup = () => {
  const { handleDelete } = useTodos();
  const { id, isEditing, handleEdit, handleSave } = useRow();

  return (
    <div className="flex min-w-[160px] gap-2">
      <Button
        variant="outline"
        aria-label="edit or save item"
        onClick={() => (isEditing ? handleSave({ id }) : handleEdit(id))}
        className="min-w-[80px] px-2"
      >
        {isEditing ? "Save" : "Edit"}
      </Button>

      <Button
        variant="outline"
        aria-label="cancel edit or delete item"
        onClick={() => {
          isEditing ? handleEdit(id) : handleDelete(id);
        }}
        className="min-w-[80px] px-2 focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        {isEditing ? "Cancel" : "Remove"}
      </Button>
    </div>
  );
};

export default ButtonGroup;
