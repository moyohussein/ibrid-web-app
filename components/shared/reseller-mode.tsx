"use client";

import { Button } from "@heroui/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";

import { BagIcon } from "../icons";

export default function ResellerModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className="bg-[#706FD3] text-white font-medium hover:from-blue-600 hover:to-purple-700"
        onPress={onOpen}
      >
        Become a Reseller
      </Button>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        size="2xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-row gap-1">
                <BagIcon />
                Ibrid Reseller Mode
              </ModalHeader>
              <ModalBody className="py-6">
                {/* Hero Introduction */}
                <div className="flex flex-col gap-y-2 mb-6">
                  <p className="text-lg font-semibold text-default-900">
                    Welcome to Ibrid Reseller Mode!
                  </p>
                  <p className="text-default-600">
                    Turn your social presence into a stream of income—no stock,
                    no stress!
                  </p>
                </div>

                {/* Divider */}
                <div className="border-t border-default-200 mb-6" />

                {/* How It Works Section */}
                <h3 className="text-base font-semibold text-default-900 mb-4">
                  Here&apos;s how it works:
                </h3>

                {/* Steps Container */}
                <div className="flex flex-col gap-y-4 mb-6">
                  {/* Step 1 */}
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-[#706FD3] flex items-center justify-center text-white font-bold text-sm">
                        1
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-default-900 mb-1">
                        Create a Social Page
                      </h4>
                      <p className="text-sm text-default-600">
                        Open a Facebook or Instagram page and name it &quot;Ibrid
                        Reseller Store&quot;—this will be your online shopfront.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-[#706FD3] flex items-center justify-center text-white font-bold text-sm">
                        2
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-default-900 mb-1">
                        Post Our Products
                      </h4>
                      <p className="text-sm text-default-600">
                        You&apos;ll get access to ready-made product images and
                        details. Simply post them on your page and start sharing
                        with your audience.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-[#706FD3] flex items-center justify-center text-white font-bold text-sm">
                        3
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-default-900 mb-1">
                        Link Buyers to Us
                      </h4>
                      <p className="text-sm text-default-600">
                        Add your unique Ibrid referral link in your bio or post
                        captions. When customers click, order, or sign up through
                        your link, we handle the rest.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-[#706FD3] flex items-center justify-center text-white font-bold text-sm">
                        4
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-default-900 mb-1">
                        Earn Your Incentives
                      </h4>
                      <p className="text-sm text-default-600">
                        For every product sold through your link, you earn instant
                        incentives, up to{" "}
                        <span className="font-bold text-green-600 dark:text-green-400">
                          ₦5,000 per sale!
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-default-200 mb-6" />

                {/* Footer Message */}
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg p-4">
                  <p className="text-sm text-center text-default-700 font-medium">
                    No inventory needed. Just your phone, your social network, and
                    the power of Ibrid.
                  </p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button className="border-[#706FD3] text-[#706FD3]" color="danger" variant="bordered" onPress={onClose}>
                  Register Now
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
