import { chunk } from "stunk";

interface FormData {
  name: string;
  website: string;
  regNumber: string;
  facebook: string;
  email: string;
  country: string;
  state: string;
  whatsapp: string;
  phone: string;
  usePhoneAsWhatsapp: boolean;
  description: string;
  logo: File | null;
  certificate: File | null;
}

interface LogisticsState {
  step: number;
  formData: FormData;
  errors: Partial<Record<keyof FormData, string>>;
  isSubmitted: boolean;
  isLoading: boolean;
}

export const logisticsChunk = chunk<LogisticsState>({
  step: 1,
  formData: {
    name: "",
    website: "",
    regNumber: "",
    facebook: "",
    email: "",
    country: "",
    state: "",
    whatsapp: "",
    phone: "",
    usePhoneAsWhatsapp: false,
    description: "",
    logo: null,
    certificate: null,
  },
  errors: {},
  isSubmitted: false,
  isLoading: false,
});

const steps = [
  { title: "Company Info", fields: ["name", "website", "regNumber", "facebook"] },
  { title: "Contact Info", fields: ["email", "country", "state", "phone", "whatsapp", "usePhoneAsWhatsapp"] },
  { title: "Additional Info", fields: ["description"] },
  { title: "Documents", fields: ["logo", "certificate"] },
];

// Validation logic
const validateStep = (step: number, formData: FormData) => {
  const newErrors: Partial<Record<keyof FormData, string>> = {};
  const currentFields = steps[step - 1].fields;

  if (currentFields.includes("name") && !formData.name.trim()) {
    newErrors.name = "Company name is required";
  }
  if (currentFields.includes("email")) {
    if (!formData.email.trim()) newErrors.email = "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
  }
  if (currentFields.includes("country") && !formData.country) {
    newErrors.country = "Country is required";
  }
  if (currentFields.includes("state") && !formData.state.trim()) {
    newErrors.state = "State is required";
  }
  if (currentFields.includes("phone") && !formData.phone.trim()) {
    newErrors.phone = "Phone number is required";
  }
  if (currentFields.includes("whatsapp") && !formData.usePhoneAsWhatsapp && !formData.whatsapp.trim()) {
    newErrors.whatsapp = "WhatsApp number is required";
  }
  if (currentFields.includes("description") && !formData.description.trim()) {
    newErrors.description = "Description is required";
  }

  return newErrors;
};

// Actions
export const handleNext = () => {
  const state = logisticsChunk.get();
  const newErrors = validateStep(state.step, state.formData);

  if (Object.keys(newErrors).length === 0) {
    logisticsChunk.set((prev) => ({
      ...prev,
      step: Math.min(prev.step + 1, steps.length),
      errors: {},
    }));
  } else {
    logisticsChunk.set((prev) => ({ ...prev, errors: newErrors }));
  }
};

export const handleBack = () => {
  logisticsChunk.set((prev) => ({
    ...prev,
    step: Math.max(prev.step - 1, 1),
    errors: {},
  }));
};

export const handleSubmit = async () => {
  const state = logisticsChunk.get();
  const newErrors = validateStep(state.step, state.formData);

  if (Object.keys(newErrors).length > 0) {
    logisticsChunk.set((prev) => ({ ...prev, errors: newErrors }));

    return;
  }

  logisticsChunk.set((prev) => ({ ...prev, isLoading: true }));
  await new Promise((resolve) => setTimeout(resolve, 2000));
  logisticsChunk.set((prev) => ({ ...prev, isLoading: false, isSubmitted: true }));
};

export const handleInputChange = (field: keyof FormData, value: string | boolean) => {
  logisticsChunk.set((prev) => ({
    ...prev,
    formData: { ...prev.formData, [field]: value },
    errors: { ...prev.errors, [field]: "" },
  }));
};

export const handleFileChange = (field: "logo" | "certificate", file: File | null) => {
  logisticsChunk.set((prev) => ({
    ...prev,
    formData: { ...prev.formData, [field]: file },
  }));
};

export const handlePhoneAsWhatsappChange = (checked: boolean) => {
  logisticsChunk.set((prev) => ({
    ...prev,
    formData: {
      ...prev.formData,
      usePhoneAsWhatsapp: checked,
      whatsapp: checked ? prev.formData.phone : "",
    },
  }));
};

export const resetForm = () => {
  logisticsChunk.reset();
};

export const destroyForm = () => {
  logisticsChunk.destroy();
};

export const isFormValid = (formData: FormData) => {
  return (
    formData.name.trim() &&
    formData.email.trim() &&
    formData.country &&
    formData.state.trim() &&
    formData.phone.trim() &&
    (formData.usePhoneAsWhatsapp || formData.whatsapp.trim()) &&
    formData.description.trim()
  );
};

export const getSteps = () => steps;
