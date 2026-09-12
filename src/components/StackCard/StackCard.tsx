import type { Technology } from "../../types/index.ts";
import { RxCross2 } from "react-icons/rx";

interface StackCardProps {
  addedTechnology: Technology;
}

const StackCard = ({ addedTechnology }: StackCardProps) => {
  return (
    <li className="flex justify-between items-center p-2.5 border border-[#E2E8F0] rounded-lg">
      <div className="flex items-center gap-2">
        <div className="w-7">
          <img
            src={addedTechnology.icon}
            alt={`${addedTechnology.name} icon`}
          />
        </div>

        <div>
          <h4 className="font-bold text-[10px]">{addedTechnology.name}</h4>

          <p className="font-bold text-[8px] text-[#94A3B8]">
            {addedTechnology.category}
          </p>
        </div>
      </div>

      <RxCross2 color="#D82C20" className="cursor-pointer" />
    </li>
  );
};

export default StackCard;
