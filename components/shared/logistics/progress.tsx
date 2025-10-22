import { useChunkValue } from "stunk/react";

import { getSteps, logisticsChunk } from "@/lib/store/logistics-store";

export default function Progress() {
  const state = useChunkValue(logisticsChunk);
  const steps = getSteps();

  return (
    <div className="flex justify-between mb-6">
      {steps.map((s, index) => (
        <div key={s.title} className="flex-1 text-center">
          <div
            className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${
              index < state.step
                ? "bg-[#706FD3] text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
            } transition-colors duration-300`}
          >
            {index + 1}
          </div>
          <p className="text-xs mt-2 text-gray-600 dark:text-gray-400">
            {s.title}
          </p>
        </div>
      ))}
    </div>
  );
}
