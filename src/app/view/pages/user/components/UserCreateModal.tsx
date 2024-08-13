import { useUserCreate, useUserUpdate } from '@api';
import { Button, Modal, ModalHandler, TextInput } from '@components';
import { UserSchema } from '@deciploy/constants';
import { User, UserRequest } from '@types';
import { Formik } from 'formik';
import { FC } from 'react';
import { toast } from 'react-toastify';
import {
  AlertMessage,
  TeamSelector,
  UserRolesSelector,
} from 'src/app/view/common';

interface ModalProps {
  modalRef: React.RefObject<ModalHandler>;
  selected?: User;
  refetch?: () => void;
}

const UserCreateModal: FC<ModalProps> = ({ modalRef, selected, refetch }) => {
  const {
    mutateAsync: doSubmit,
    isPending,
    error,
  } = selected ? useUserUpdate(selected.id) : useUserCreate();

  const initialValues: UserRequest = {
    fullName: selected?.fullName ?? '',
    email: selected?.username ?? '',
    roles: selected?.roles ?? [],
    teamId: selected?.team?.id ?? '',
  };

  const handleSubmit = (values: UserRequest) => {
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
    <Modal ref={modalRef} title={selected ? 'Edit user' : 'Add new user'}>
      <Formik
        initialValues={initialValues}
        validationSchema={UserSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
          errors,
        }) => (
          <div className="flex flex-col gap-4 ">
            <AlertMessage message={error?.message} type="error" />

            <TextInput
              label="Name"
              onChange={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
              value={values.fullName}
              isError={!!errors.fullName}
              message={errors.fullName}
            />

            <TextInput
              label="Email"
              onChange={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              isError={!!errors.email}
              message={errors.email}
            />

            <UserRolesSelector
              label="Role"
              onChange={(roles) => setFieldValue('roles', roles)}
              value={values.roles}
              isError={!!errors.roles}
              message={errors.roles as string}
            />

            <TeamSelector
              label="Team"
              onChange={(teamId) => setFieldValue('teamId', teamId)}
              value={values.teamId}
              isError={!!errors.teamId}
              message={errors.teamId}
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

export default UserCreateModal;
