"use client";

import { useChunkValue } from "stunk/react";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";

import {
  logisticsChunk,
  handleNext,
  handleBack,
  handleSubmit,
  isFormValid,
  getSteps,
} from "@/lib/store/logistics-store";
import Progress from "@/components/shared/logistics/progress";
import StepOne from "@/components/shared/logistics/step-one";
import Steptwo from "@/components/shared/logistics/step-two";
import StepThree from "@/components/shared/logistics/step-three";
import StepFour from "@/components/shared/logistics/step-four";

export default function LogisticsRegistrationPage() {
  const state = useChunkValue(logisticsChunk);
  const steps = getSteps();

  return (
    <div className="min-h-screen bg-[#706FD3]/30 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Do you own a Logistics?
            </h1>
            <p className="text-gray-600 text-sm dark:text-gray-400 leading-relaxed">
              {`IBRID only creates a unique service for any logistics willing to register its company with IBRID's terms & conditions, this is a platform where millions of users could subscribe their choice of logistics/dispatcher all over the world.`}
            </p>
          </div>

          <Card className="mb-6 p-6" shadow="none">
            <CardBody>
              <Progress />
              <div className="space-y-6 transition-all duration-300">
                {state.step === 1 && <StepOne />}

                {state.step === 2 && <Steptwo />}

                {state.step === 3 && <StepThree />}

                {state.step === 4 && <StepFour />}

                <div className="flex justify-end mt-6 gap-5">
                  {state.step > 1 && (
                    <Button
                      className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold"
                      isDisabled={state.step === 1}
                      onPress={handleBack}
                    >
                      Back
                    </Button>
                  )}
                  {state.step < steps.length ? (
                    <Button
                      className="bg-[#706FD3] text-white font-semibold hover:from-blue-600 hover:to-purple-700"
                      onPress={handleNext}
                    >
                      Next
                    </Button>
                  ) : (
                    <Button
                      className="bg-[#706FD3] text-white font-semibold hover:from-blue-600 hover:to-purple-700"
                      isDisabled={!isFormValid(state.formData)}
                      isLoading={state.isLoading}
                      onPress={handleSubmit}
                    >
                      {state.isLoading
                        ? "Submitting..."
                        : "Register My Logistics"}
                    </Button>
                  )}
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {"By registering, you agree to IBRID's "}
                    <a
                      className="text-[#706FD3] hover:underline font-medium"
                      href="/terms"
                    >
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a
                      className="text-[#706FD3] hover:underline font-medium"
                      href="/privacy"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </>
      </div>
    </div>
  );
}
