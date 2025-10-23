import { useState, type KeyboardEvent as ReactKeyBoardEvent } from "react";
import { useTodos } from "../providers/TodosProvider";

type Save = {
  id: string;
  e?:
    | ReactKeyBoardEvent<HTMLInputElement>
    | ReactKeyBoardEvent<HTMLButtonElement>
    | undefined;
};

const useEdit = () => {
  const { todos, setTodos } = useTodos();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleEditingId = (id: string) => {
    setEditingId(id);
  };

  const handleSave = ({ id, e }: Save) => {
    const text = draft.trim();
    const originalItem = todos.find((t) => t.id === id)?.item;
    const key = e?.key;

    if (key === "Escape") {
      e?.preventDefault();
      setIsEditing(false);
      setEditingId(null);
    }

    if (key && key !== "Enter") return;

    if (text.length < 4 || text === originalItem) {
      setIsEditing(false);
      setEditingId(null);
      return;
    }

    if (text.length >= 4) {
      setTodos((prev) =>
        prev.map((t) => (t.id === id ? { ...t, item: text } : t))
      );

      setIsEditing(false);
      setEditingId(null);
    }
  };

  const handleEdit = (id: string) => {
    handleEditingId(id);
    setIsEditing((p) => !p);
  };

  return {
    editingId,
    setEditingId,
    draft,
    setDraft,
    isEditing,
    setIsEditing,
    handleSave,
    handleEdit,
  };
};

export default useEdit;
