"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Input } from "@heroui/input";
import { Divider } from "@heroui/divider";
import { toast } from "react-hot-toast";

import {
  EyeFilledIcon,
  EyeSlashFilledIcon,
  GoogleIcon,
  XIcon,
} from "@/components/icons";
import AuthleftSide from "@/components/shared/auth/auth-left";

interface FormData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSocialLogin = (provider: string) => {
    toast.success(provider);
  };

  const handleSubmit = () => {};

  return (
    <div className="min-h-screen flex">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 bg-[#706FD3]/30">
        <div className="w-full max-w-xl">
          <p className="leading-relaxed text-xl text-center mb-3">
            Log in to buy and sell from anywhere.
          </p>
          <Card shadow="none">
            <CardBody className="space-y-4">
              {/* Social Login */}
              <div className="space-y-3">
                <Button
                  fullWidth
                  className="h-12 hover:border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  startContent={<GoogleIcon />}
                  variant="bordered"
                  onPress={() => handleSocialLogin("Google")}
                >
                  Continue with Google
                </Button>
                <Button
                  fullWidth
                  className="h-12 hover:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/20"
                  startContent={<XIcon />}
                  variant="bordered"
                  onPress={() => handleSocialLogin("X")}
                >
                  Continue with X
                </Button>
              </div>

              <div className="flex items-center gap-4 py-2">
                <Divider className="flex-1" />
                <span className="text-gray-400 text-sm">or</span>
                <Divider className="flex-1" />
              </div>

              {/* Form */}
              <div className="space-y-4">
                <Input
                  label="Email"
                  size="sm"
                  type="email"
                  value={formData.email}
                  onValueChange={(value) => handleInputChange("email", value)}
                />

                <Input
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={() => setIsVisible(!isVisible)}
                    >
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400" />
                      )}
                    </button>
                  }
                  label="Password"
                  size="sm"
                  type={isVisible ? "text" : "password"}
                  value={formData.password}
                  onValueChange={(value) =>
                    handleInputChange("password", value)
                  }
                />

                <Button
                  fullWidth
                  className="h-12 bg-[#706FD3] text-white font-semibold hover:from-blue-600 hover:to-purple-700"
                  isDisabled={!formData.email || !formData.password}
                  onPress={handleSubmit}
                >
                  Sign in
                </Button>
              </div>

              <div className="text-center pt-2">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {"Don't have an account? "}
                  <a
                    className="text-[#706FD3] hover:underline font-medium"
                    href="/signup"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </CardBody>
          </Card>

          <div className="lg:hidden text-center mt-6">
            <p className="text-xs text-gray-400">
              Join thousands of businesses worldwide
            </p>
          </div>
        </div>
      </div>
      <AuthleftSide />
    </div>
  );
}
