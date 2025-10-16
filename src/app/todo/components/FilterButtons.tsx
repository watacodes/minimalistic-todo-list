"use client";

import { Dispatch, SetStateAction } from "react";
import { FilterProps } from "../../types/types";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type Props = {
  status: FilterProps;
  setStatus: Dispatch<SetStateAction<FilterProps>>;
};

const FilterButtons = ({ status, setStatus }: Props) => {
  const handleStatusChange = (v: string) => {
    if (v === "all" || v === "in-progress" || v === "done") setStatus(v);
  };

  return (
    <div>
      <ToggleGroup
        type="single"
        value={status}
        onValueChange={handleStatusChange}
        className="flex space-x-1 mb-4 w-1/3 rounded-md"
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
