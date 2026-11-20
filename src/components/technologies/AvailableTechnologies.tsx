import type { ITechnology } from "../../types/technology";
import TechCard from "./TechCard";

interface IAvailableTechnologiesProps {
  technologies: ITechnology[];
  selectedTechnologies: ITechnology[];
  onAddToStack: (technology: ITechnology) => void;
}

const AvailableTechnologies = ({
  technologies,
  selectedTechnologies,
  onAddToStack,
}: IAvailableTechnologiesProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {technologies.map((technology: ITechnology) => {
        const isAdded = selectedTechnologies.some(
          (selected) => selected.id === technology.id,
        );

        return (
          <TechCard
            key={technology.id}
            technology={technology}
            isAdded={isAdded}
            onAddToStack={onAddToStack}
          />
        );
      })}
    </div>
  );
};

export default AvailableTechnologies;
