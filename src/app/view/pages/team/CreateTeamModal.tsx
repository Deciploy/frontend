import { useTeamCreate, useTeamUpdate } from '@api';
import { Button, Modal, ModalHandler, TextInput } from '@components';
import { TeamSchema } from '@deciploy/constants';
import { Team, TeamRequest } from '@types';
import { Formik } from 'formik';
import { FC } from 'react';
import { toast } from 'react-toastify';

import { AlertMessage } from '../../common';

interface ModalProps {
  modalRef: React.RefObject<ModalHandler>;
  selected?: Team;
  refetch?: () => void;
}

const CreateTeamModal: FC<ModalProps> = ({ modalRef, selected, refetch }) => {
  const {
    mutateAsync: doSubmit,
    isPending,
    error,
  } = selected ? useTeamUpdate(selected.id) : useTeamCreate();

  const initialValues: TeamRequest = {
    name: selected?.name ?? '',
    description: selected?.description ?? '',
  };

  const handleSubmit = (values: TeamRequest) => {
    doSubmit(values)
      .then((r) => {
        modalRef.current?.close();
        refetch && refetch();
        toast.success(
          selected ? 'Team updated successfully' : 'Team added successfully'
        );
      })
      .catch((e) => {
        // Do nothing
      });
  };

  return (
    <Modal ref={modalRef} title={selected ? 'Edit team' : 'Add new team'}>
      <Formik
        initialValues={initialValues}
        validationSchema={TeamSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <div className="flex flex-col gap-4 ">
            <AlertMessage message={error?.message} type="error" />
            <TextInput
              label="Name"
              onChange={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              isError={!!errors.name}
              message={errors.name}
            />
            <TextInput
              label="Description"
              onChange={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
              isError={!!errors.description}
              message={errors.description}
            />

            <div className="flex justify-end gap-2">
              <Button
                variant="text"
                color="secondary"
                onClick={() => modalRef.current?.close()}
              >
                Cancel
              </Button>
              <Button
                color="primary"
                onClick={handleSubmit}
                loading={isPending}
                loadingText="Saving..."
              >
                Save
              </Button>
            </div>
          </div>
        )}
      </Formik>
    </Modal>
  );
};

export default CreateTeamModal;
