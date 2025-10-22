import { useChunkValue } from "stunk/react";
import { Divider } from "@heroui/divider";
import { Input } from "@heroui/input";

import { handleInputChange, logisticsChunk } from "@/lib/store/logistics-store";

export default function StepOne() {
  const state = useChunkValue(logisticsChunk);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
        Company Information
      </h3>
      <Divider />
      <Input
        isRequired
        errorMessage={state.errors.name}
        isInvalid={!!state.errors.name}
        placeholder="Enter your company name"
        value={state.formData.name}
        onValueChange={(value) => handleInputChange("name", value)}
      />
      <Input
        description="Optional"
        placeholder="https://yourcompany.com"
        value={state.formData.website}
        onValueChange={(value) => handleInputChange("website", value)}
      />
      <Input
        description="Optional - Not all companies may have this"
        placeholder="Enter registration number if available"
        value={state.formData.regNumber}
        onValueChange={(value) => handleInputChange("regNumber", value)}
      />
      <Input
        description="Optional"
        placeholder="https://facebook.com/yourcompany"
        value={state.formData.facebook}
        onValueChange={(value) => handleInputChange("facebook", value)}
      />
    </div>
  );
}
