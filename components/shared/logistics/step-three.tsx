import { Divider } from "@heroui/divider";
import { Textarea } from "@heroui/input";
import { useChunkValue } from "stunk/react";

import { handleInputChange, logisticsChunk } from "@/lib/store/logistics-store";

export default function StepThree() {
  const state = useChunkValue(logisticsChunk);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
        Additional Information
      </h3>
      <Divider />
      <Textarea
        isRequired
        errorMessage={state.errors.description}
        isInvalid={!!state.errors.description}
        minRows={10}
        placeholder="Tell us about your logistics company, services offered, coverage area, etc."
        value={state.formData.description}
        onValueChange={(value) => handleInputChange("description", value)}
      />
    </div>
  );
}
