import { Input } from "@heroui/input";
import { Divider } from "@heroui/divider";
import { Select, SelectItem } from "@heroui/select";
import { Checkbox } from "@heroui/checkbox";
import { useChunkValue } from "stunk/react";

import {
  handleInputChange,
  handlePhoneAsWhatsappChange,
  logisticsChunk,
} from "@/lib/store/logistics-store";

const countries = [
  { value: "ng", label: "Nigeria" },
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
  { value: "za", label: "South Africa" },
  { value: "ke", label: "Kenya" },
  { value: "gh", label: "Ghana" },
];

export default function Steptwo() {
  const state = useChunkValue(logisticsChunk);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
        Contact Information
      </h3>
      <Divider />
      <Input
        isRequired
        errorMessage={state.errors.email}
        isInvalid={!!state.errors.email}
        placeholder="company@example.com"
        type="email"
        value={state.formData.email}
        onValueChange={(value) => handleInputChange("email", value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select
          isRequired
          errorMessage={state.errors.country}
          isInvalid={!!state.errors.country}
          placeholder="Country"
          selectedKeys={state.formData.country ? [state.formData.country] : []}
          onSelectionChange={(keys) => {
            const selectedKey = Array.from(keys)[0] as string;

            handleInputChange("country", selectedKey);
          }}
        >
          {countries.map((country) => (
            <SelectItem key={country.value}>{country.label}</SelectItem>
          ))}
        </Select>
        <Input
          isRequired
          errorMessage={state.errors.state}
          isInvalid={!!state.errors.state}
          placeholder="Enter your state"
          value={state.formData.state}
          onValueChange={(value) => handleInputChange("state", value)}
        />
      </div>
      <Input
        isRequired
        errorMessage={state.errors.phone}
        isInvalid={!!state.errors.phone}
        placeholder="+234 XXX XXX XXXX"
        value={state.formData.phone}
        onValueChange={(value) => {
          handleInputChange("phone", value);
          if (state.formData.usePhoneAsWhatsapp) {
            handleInputChange("whatsapp", value);
          }
        }}
      />
      <div className="space-y-3">
        <Checkbox
          isSelected={state.formData.usePhoneAsWhatsapp}
          onValueChange={handlePhoneAsWhatsappChange}
        >
          Use phone number as WhatsApp number
        </Checkbox>
        {!state.formData.usePhoneAsWhatsapp && (
          <Input
            isRequired
            errorMessage={state.errors.whatsapp}
            isInvalid={!!state.errors.whatsapp}
            placeholder="+234 XXX XXX XXXX"
            value={state.formData.whatsapp}
            onValueChange={(value) => handleInputChange("whatsapp", value)}
          />
        )}
      </div>
    </div>
  );
}
