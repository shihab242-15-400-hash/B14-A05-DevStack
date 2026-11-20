import type { ITechnology } from "../../types/technology";
import YourStackCard from "./YourStackCard";

interface IYourStackProps {
  selectedTechnologies: ITechnology[];
  onRemoveFromStack: (technology: ITechnology) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  selectedTechnologies,
  onRemoveFromStack,
  onRemoveAll,
}: IYourStackProps) => {
  const hasSelected = selectedTechnologies.length > 0;

  return (
    <aside className="lg:sticky lg:top-24 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
      {/* Heading and Subtitle */}
      <div className="mb-5">
        <h3 className="text-xl font-bold text-slate-900">Your Stack</h3>
        <p className="text-sm text-slate-400 mt-1 font-medium">
          {hasSelected
            ? `${selectedTechnologies.length} Technology Selected`
            : "No technologies selected yet."}
        </p>
      </div>

      {/* Empty State vs Selected Items */}
      {!hasSelected ? (
        /* Empty state: matches ui/YourStack-without.png */
        <div className="border border-dashed border-sky-200/90 rounded-2xl py-8 px-4 flex items-center justify-center text-center my-2 bg-sky-50/10">
          <p className="text-slate-400 text-sm font-medium">
            Your stack is empty.
          </p>
        </div>
      ) : (
        /* With items: matches ui/YourStack-with.png */
        <div className="space-y-3">
          <div className="flex flex-col gap-3 max-h-[460px] overflow-y-auto pr-1">
            {selectedTechnologies.map((technology: ITechnology) => (
              <YourStackCard
                key={technology.id}
                technology={technology}
                onRemoveFromStack={onRemoveFromStack}
              />
            ))}
          </div>

          {/* Remove All button */}
          <div className="pt-3">
            <button
              type="button"
              onClick={onRemoveAll}
              className="w-full py-2.5 px-4 rounded-xl text-sm font-bold text-red-500 border border-red-300 hover:bg-red-50 hover:border-red-400 transition-colors text-center cursor-pointer"
            >
              Remove All
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};

export default YourStack;
