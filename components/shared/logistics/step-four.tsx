import { Divider } from "@heroui/divider";
import { useChunkValue } from "stunk/react";

import FileUpload from "../file-upload";

import { handleFileChange, logisticsChunk } from "@/lib/store/logistics-store";

export default function StepFour() {
  const state = useChunkValue(logisticsChunk);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
        Documents
      </h3>
      <Divider />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FileUpload
          accept="image/*"
          description="Optional - PNG, JPG, JPEG up to 5MB"
          label="Company Logo"
          maxSize="5MB"
          value={state.formData.logo}
          onFileChange={(file) => handleFileChange("logo", file)}
        />
        <FileUpload
          accept=".pdf,.jpg,.jpeg,.png"
          description="Optional - PDF, PNG, JPG up to 10MB"
          label="Business Certificate/ID"
          maxSize="10MB"
          value={state.formData.certificate}
          onFileChange={(file) => handleFileChange("certificate", file)}
        />
      </div>
    </div>
  );
}
