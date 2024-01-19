import { Button, Modal, ModalHandler, TextInput, useAlert } from '@components';
import { FC, useRef } from 'react';

const SamplePage: FC = () => {
  const modalRef = useRef<ModalHandler>(null);
  const { showAlert } = useAlert();

  const askToDelete = () => {
    showAlert({
      title: 'Are you sure?',
      message: 'This action cannot be undone.',
      type: 'confirmation',
      color: 'warning',
      handleConfirm: () => {
        console.log('confirmed');
      },
    });
  };

  const openModal = () => {
    modalRef.current?.open();
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <Button onClick={() => openModal()}>Create</Button>
      <Button color="warning" onClick={() => askToDelete()}>
        Delete
      </Button>

      <Modal ref={modalRef} title="Create Profile">
        <div className="flex flex-col gap-4 ">
          <TextInput label="First Name" />
          <TextInput label="Last Name" />
          <TextInput label="Email" />

          <div className="flex justify-end gap-2">
            <Button
              onClick={() => modalRef.current?.close()}
              variant="text"
              color="secondary"
            >
              Cancel
            </Button>
            <Button color="success">Save</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SamplePage;
