"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Input } from "@heroui/input";

import { SuccessIcon } from "@/components/icons";
import AuthLogo from "@/components/shared/auth-logo";

interface FormData {
  email: string;
}

export default function ForgotPasswordPage() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  const handleResendEmail = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#706FD3]/30">
      <div className="w-full max-w-md">
        {!isSubmitted ? (
          <>
            <div className="text-center mb-6">
              <AuthLogo />

              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Forgot your password?
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {
                  "Enter your email address and we'll send you a link to reset your password."
                }
              </p>
            </div>

            <Card shadow="none">
              <CardBody className="space-y-4">
                <div className="space-y-4">
                  <Input
                    label="Email"
                    placeholder="Enter your email address"
                    size="sm"
                    type="email"
                    value={formData.email}
                    onValueChange={(value) => handleInputChange("email", value)}
                  />

                  <Button
                    fullWidth
                    className="h-12 bg-[#706FD3] text-white font-semibold hover:from-blue-600 hover:to-purple-700"
                    isDisabled={!formData.email}
                    isLoading={isLoading}
                    onPress={handleSubmit}
                  >
                    {isLoading ? "Sending..." : "Send Reset Link"}
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
                Check your email
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {"We've sent a password reset link to "}
                <span className="font-medium text-gray-900 dark:text-white">
                  {formData.email}
                </span>
              </p>
            </div>

            <Card shadow="none">
              <CardBody className="space-y-4">
                <div className="space-y-4">
                  <Button
                    fullWidth
                    className="h-12 bg-[#706FD3] text-white font-semibold hover:from-blue-600 hover:to-purple-700"
                    isLoading={isLoading}
                    onPress={handleResendEmail}
                  >
                    {isLoading ? "Resending..." : "Resend Email"}
                  </Button>
                </div>

                <div className="text-center pt-2">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {"Didn't receive the email? Check your spam folder or "}
                    <button
                      className="text-[#706FD3] hover:underline font-medium"
                      onClick={() => setIsSubmitted(false)}
                    >
                      try a different email
                    </button>
                  </p>
                </div>

                <div className="text-center">
                  <a
                    className="text-sm text-[#706FD3] hover:underline font-medium"
                    href="/login"
                  >
                    Back to login
                  </a>
                </div>
              </CardBody>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
