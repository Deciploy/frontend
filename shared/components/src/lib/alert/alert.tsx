import React, {
  ReactNode,
  createContext,
  useContext,
  useRef,
  useState,
} from 'react';

import { Button } from '../button';
import { Modal, ModalHandler } from '../modal';

interface AlertData {
  title: string;
  message: string;
  color?: 'primary' | 'success' | 'warning';
  type?: 'confirmation' | 'message';
  handleConfirm?: () => void;
}

interface AlertContextProps {
  alert: AlertData | undefined;
  show: (alert: AlertData) => void;
  hide: () => void;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const AlertProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [alert, serAlert] = useState<AlertData | undefined>(undefined);
  const modalRef = useRef<ModalHandler>(null);

  const show = (alert: AlertData) => {
    serAlert({
      ...alert,
      color: alert.color ?? 'primary',
      type: alert.type ?? 'message',
    });
    modalRef.current?.open();
  };

  const hide = () => {
    modalRef.current?.close();
  };

  return (
    <AlertContext.Provider value={{ show, hide, alert: alert }}>
      {children}
      <Modal ref={modalRef} title={alert?.title}>
        <div className="flex flex-col gap-4 ">
          <p>{alert?.message}</p>

          {alert?.type === 'confirmation' && (
            <div className="flex justify-end gap-2">
              <Button
                onClick={() => modalRef.current?.close()}
                variant="text"
                color="secondary"
              >
                No
              </Button>
              <Button
                color={alert?.color}
                onClick={() => {
                  modalRef.current?.close();
                  alert?.handleConfirm?.();
                }}
              >
                Yes
              </Button>
            </div>
          )}
        </div>
      </Modal>
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);

  if (context === undefined) {
    throw new Error('useAlert must be used within a AlertProvider');
  }

  const { show } = context;

  const showAlert = (alert: AlertData) => {
    show(alert);
  };

  return { showAlert };
};
