"use clinet";

import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";

const Filter = () => {
  return (
    <div>
      <ButtonGroup className="mb-4">
        <Button variant="outline">All</Button>
        <Button variant="outline">In Progress</Button>
        <Button variant="outline">Done</Button>
      </ButtonGroup>
    </div>
  );
};

export default Filter;
