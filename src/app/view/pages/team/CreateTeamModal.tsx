import { Button, Modal, ModalHandler, TextInput } from '@components';
import { TeamSchema } from '@deciploy/constants';
import { Formik } from 'formik';
import { FC } from 'react';
import { usePost } from 'src/app/utils/hooks';
import { NetworkResponse } from 'src/data';

interface TeamValues {
  name: string;
  description: string;
}

interface CreateTeamModalProps {
  modalRef: React.RefObject<ModalHandler>;
}

const CreateTeamModal: FC<CreateTeamModalProps> = ({ modalRef }) => {
  const { mutateAsync, isPending } = usePost<NetworkResponse>('team');

  const initialValues: TeamValues = {
    name: '',
    description: '',
  };

  const handleSubmit = (values: TeamValues) => {
    mutateAsync(values)
      .then((r) => {
        modalRef.current?.close();
      })
      .catch((e) => {
        // Do nothing
      });
  };

  return (
    <Modal ref={modalRef} title="Add New Team">
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
              <Button variant="text" color="secondary">
                Clear
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
