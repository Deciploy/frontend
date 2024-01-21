import React from 'react';

export interface ModalHandler {
  open: () => void;
  close: () => void;
}

interface ModalProps {
  children: React.ReactNode;
  title?: string;
}

export const Modal = React.forwardRef<ModalHandler, ModalProps>(
  ({ children, title }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const open = () => {
      setIsOpen(true);
    };

    const close = () => {
      setIsOpen(false);
    };

    React.useImperativeHandle(ref, () => ({
      open,
      close,
    }));

    return (
      isOpen && (
        <div
          tabIndex={-1}
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 bottom-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={close}
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div
              className="relative bg-white rounded-lg shadow"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                {title && (
                  <h3 className="text-xl font-semibold text-gray-900 ">
                    {title}
                  </h3>
                )}
                <button
                  type="button"
                  onClick={close}
                  className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4">{children}</div>
            </div>
          </div>
        </div>
      )
    );
  }
);
