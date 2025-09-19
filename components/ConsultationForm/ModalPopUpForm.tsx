import { useState } from "react";
import { createPortal } from "react-dom";
import ConsultationForm from ".";
import ConsultationFormStacked from "./ConsultationFormStacked";

const ModalPopupForm = ({ triggerText }: { triggerText: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full flex items-center justify-center rounded-sm bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
      >
        {triggerText}
      </button>

      {isOpen &&
        createPortal(
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 z-[9999] bg-black bg-opacity-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal box */}
            <div className="fixed left-1/2 top-1/2 z-[10000] w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 shadow-lg dark:bg-gray-800">
              <button
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-200"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>

              <div className="flex flex-col gap-4">
                <ConsultationFormStacked />
              </div>
            </div>
          </>,
          document.body
        )}
    </>
  );
};

export default ModalPopupForm;
