import { useState } from "react";
import type { ITechnology } from "../../types/technology";
import { Bounce, toast } from "react-toastify";
import AvailableTechnologies from "./AvailableTechnologies";
import YourStack from "./YourStack";

interface TechnologiesProps {
  technologies: ITechnology[];
}

const Technologies = ({ technologies }: TechnologiesProps) => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    ITechnology[]
  >([]);

  // Add technology to stack with duplicate check and React-Toastify alerts
  const handleAddToStack = (technology: ITechnology) => {
    const isAlreadyAdded = selectedTechnologies.some(
      (selected) => selected.id === technology.id,
    );

    if (isAlreadyAdded) {
      toast.warn(`${technology.name} is already in your stack!`, {
        position: "top-center",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    setSelectedTechnologies([...selectedTechnologies, technology]);
    toast.success(`${technology.name} added to your stack!`, {
      position: "top-center",
      autoClose: 3000,
      theme: "light",
      transition: Bounce,
    });
  };

  // Remove single technology from stack
  const handleRemoveFromStack = (technology: ITechnology) => {
    const restTechnologies = selectedTechnologies.filter(
      (selected) => selected.id !== technology.id,
    );

    setSelectedTechnologies(restTechnologies);
    toast.info(`${technology.name} removed from your stack!`, {
      position: "top-center",
      autoClose: 3000,
      theme: "light",
      transition: Bounce,
    });
  };

  // Remove all technologies from stack
  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) return;

    setSelectedTechnologies([]);
    toast.error("All technologies removed from your stack!", {
      position: "top-center",
      autoClose: 3000,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <section id="technologies" className="py-12 sm:py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore the <span className="brand-gradient-text">Technologies</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500 font-normal">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Layout: Available Technologies Grid (3 cols on desktop) + Your Stack Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <div className="lg:col-span-3">
            <AvailableTechnologies
              technologies={technologies}
              selectedTechnologies={selectedTechnologies}
              onAddToStack={handleAddToStack}
            />
          </div>

          <div className="lg:col-span-1">
            <YourStack
              selectedTechnologies={selectedTechnologies}
              onRemoveFromStack={handleRemoveFromStack}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Technologies;
