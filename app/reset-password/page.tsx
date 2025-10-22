"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Input } from "@heroui/input";

import {
  EyeFilledIcon,
  EyeSlashFilledIcon,
  SuccessIcon,
} from "@/components/icons";
import AuthLogo from "@/components/shared/auth-logo";

interface FormData {
  password: string;
  confirmPassword: string;
}

export default function ResetPasswordPage() {
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [formData, setFormData] = useState<FormData>({
    password: "",
    confirmPassword: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear errors when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  const isFormValid =
    formData.password.length >= 8 &&
    formData.confirmPassword.length > 0 &&
    formData.password === formData.confirmPassword;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#706FD3]/30">
      <div className="w-full max-w-md">
        {!isSubmitted ? (
          <>
            <div className="text-center mb-6">
              <AuthLogo />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Reset your password
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {`Enter your new password below. Make sure it's at least 8 characters long.`}
              </p>
            </div>

            <Card shadow="none">
              <CardBody className="space-y-4">
                <div className="space-y-4">
                  <Input
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                      >
                        {isPasswordVisible ? (
                          <EyeSlashFilledIcon className="text-2xl text-default-400" />
                        ) : (
                          <EyeFilledIcon className="text-2xl text-default-400" />
                        )}
                      </button>
                    }
                    errorMessage={errors.password}
                    isInvalid={!!errors.password}
                    label="New Password"
                    // placeholder="Enter your new password"
                    size="sm"
                    type={isPasswordVisible ? "text" : "password"}
                    value={formData.password}
                    onValueChange={(value) =>
                      handleInputChange("password", value)
                    }
                  />

                  <Input
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={() =>
                          setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                        }
                      >
                        {isConfirmPasswordVisible ? (
                          <EyeSlashFilledIcon className="text-2xl text-default-400" />
                        ) : (
                          <EyeFilledIcon className="text-2xl text-default-400" />
                        )}
                      </button>
                    }
                    errorMessage={errors.confirmPassword}
                    isInvalid={!!errors.confirmPassword}
                    label="Confirm New Password"
                    // placeholder="Confirm your new password"
                    size="sm"
                    type={isConfirmPasswordVisible ? "text" : "password"}
                    value={formData.confirmPassword}
                    onValueChange={(value) =>
                      handleInputChange("confirmPassword", value)
                    }
                  />

                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Password requirements:
                    <ul className="mt-1 space-y-1">
                      <li
                        className={`flex items-center ${formData.password.length >= 8 ? "text-green-600" : ""}`}
                      >
                        <span className="mr-2">•</span>
                        At least 8 characters
                      </li>
                      <li
                        className={`flex items-center ${formData.password === formData.confirmPassword && formData.confirmPassword.length > 0 ? "text-green-600" : ""}`}
                      >
                        <span className="mr-2">•</span>
                        Passwords must match
                      </li>
                    </ul>
                  </div>

                  <Button
                    fullWidth
                    className="h-12 bg-[#706FD3] text-white font-semibold hover:from-blue-600 hover:to-purple-700"
                    isDisabled={!isFormValid}
                    isLoading={isLoading}
                    onPress={handleSubmit}
                  >
                    {isLoading ? "Updating..." : "Update Password"}
                  </Button>
                </div>

                <div className="text-center pt-2">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Remember your password?{" "}
                    <a
                      className="text-[#706FD3] hover:underline font-medium"
                      href="/login"
                    >
                      Back to login
                    </a>
                  </p>
                </div>
              </CardBody>
            </Card>
          </>
        ) : (
          <>
            <div className="text-center mb-6">
              <SuccessIcon />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Password updated!
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Your password has been successfully updated. You can now log in
                with your new password.
              </p>
            </div>

            <Card shadow="none">
              <CardBody className="space-y-4">
                <div className="space-y-4">
                  <Button
                    fullWidth
                    className="h-12 bg-[#706FD3] text-white font-semibold hover:from-blue-600 hover:to-purple-700"
                    onPress={() => router.push("/login")}
                  >
                    Continue to Login
                  </Button>
                </div>

                <div className="text-center pt-2">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Need help?{" "}
                    <a
                      className="text-[#706FD3] hover:underline font-medium"
                      href="/support"
                    >
                      Contact support
                    </a>
                  </p>
                </div>
              </CardBody>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
