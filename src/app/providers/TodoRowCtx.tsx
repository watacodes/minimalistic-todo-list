"use client";

import {
  createContext,
  useContext,
  useState,
  type KeyboardEvent as ReactKeyBoardEvent,
} from "react";
import { useTodos } from "./TodosProvider";

type Save = {
  id: string;
  e?:
    | ReactKeyBoardEvent<HTMLInputElement>
    | ReactKeyBoardEvent<HTMLButtonElement>
    | undefined;
};

type Ctx = {
  editingId: string | null;
  setEditingId: (id: string | null) => void;
  draft: string;
  setDraft: (text: string) => void;
  isEditing: boolean;
  setIsEditing: (v: boolean) => void;
  handleSave: ({ id, e }: Save) => void;
  handleEdit: (id: string) => void;
  id: string;
  item: string;
};

export const RowCtx = createContext<Ctx | null>(null);

export const TodoRowProvider = ({
  id,
  item,
  children,
}: {
  id: string;
  item: string;
  children: React.ReactNode;
}) => {
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

  const value = {
    editingId,
    setEditingId,
    draft,
    setDraft,
    isEditing,
    setIsEditing,
    handleSave,
    handleEdit,
    id,
    item,
  };

  return <RowCtx.Provider value={value}>{children}</RowCtx.Provider>;
};

export const useRow = () => {
  const ctx = useContext(RowCtx);
  if (!ctx) throw new Error("useRow must be used in a RowCtx.Provider");
  return ctx;
};
