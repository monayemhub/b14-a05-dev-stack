import type { Technology } from "../../types/index.ts";
import StackCard from "../StackCard/StackCard.tsx";

interface YourStackProps {
  availableTechnologies: Technology[];
  handleRemoveClick: (technologyId: string) => void;
  handleRemoveAllClick: () => void;
}

const YourStack = ({
  availableTechnologies,
  handleRemoveClick,
  handleRemoveAllClick,
}: YourStackProps) => {
  const addedTechnologies: Technology[] = availableTechnologies.filter(
    (availableTechnology) => availableTechnology.isAdded,
  );

  return (
    <aside className="h-fit p-5 border border-[#F1F5F9] rounded-2xl">
      <h3 className="font-bold text-base mb-1">Your Stack</h3>

      <p className="font-normal text-xs text-[#94A3B8] mb-4">
        {addedTechnologies.length
          ? `${addedTechnologies.length} technology(s) selected.`
          : "No technologies selected yet."}
      </p>

      {!!addedTechnologies.length && (
        <ul className="space-y-1 mb-12">
          {addedTechnologies.map((addedTechnology) => (
            <StackCard
              key={addedTechnology.id}
              addedTechnology={addedTechnology}
              handleRemoveClick={handleRemoveClick}
            />
          ))}
        </ul>
      )}

      {!!addedTechnologies.length && (
        <button
          onClick={handleRemoveAllClick}
          className="block font-semibold text-sm text-[#D82C20] w-full py-2 border border-[#ED8C85] rounded-lg cursor-pointer"
        >
          Remove All
        </button>
      )}

      {!!addedTechnologies.length || (
        <p className="font-normal text-xs text-[#94A3B8] text-center p-2.5 border border-dashed border-[#E2E8F0] rounded-lg">
          Your stack is empty.
        </p>
      )}
    </aside>
  );
};

export default YourStack;
