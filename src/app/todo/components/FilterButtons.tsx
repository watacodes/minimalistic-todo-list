"use client";

import { useTodos } from "@/app/providers/TodosProvider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const FilterButtons = () => {
  const { status, setStatus } = useTodos();
  const handleStatusChange = (v: string) => {
    if (v === "all" || v === "in-progress" || v === "done") setStatus(v);
  };

  return (
    <div>
      <ToggleGroup
        type="single"
        value={status}
        onValueChange={handleStatusChange}
        className="flex mb-4 w-1/3 rounded-md"
      >
        <ToggleGroupItem
          variant="outline"
          value="all"
          className="px-2"
          aria-label="all"
        >
          All
        </ToggleGroupItem>
        <ToggleGroupItem
          variant="outline"
          value="in-progress"
          className="px-2"
          aria-label="in progress"
        >
          In Progress
        </ToggleGroupItem>
        <ToggleGroupItem
          variant="outline"
          value="done"
          className="px-2"
          aria-label="done"
        >
          Done
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default FilterButtons;
