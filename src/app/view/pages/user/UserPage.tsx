import { useUserDelete, useUserFetch } from '@api';
import { Button, ModalHandler, Table, useAlert } from '@components';
import { User } from '@types';
import { FC, useMemo, useRef, useState } from 'react';
import { toast } from 'react-toastify';

import { SearchInput, UserRolesBadges } from '../../common';
import UserCreateModal from './components/UserCreateModal';

const UserPage: FC = () => {
  const modalRef = useRef<ModalHandler>(null);

  const [selected, setSelected] = useState<User | undefined>(undefined);
  const [query, setQuery] = useState('');

  // Fetch all users request
  const { data, error, isLoading, refetch } = useUserFetch();

  // Delete a user request
  const { mutateAsync: doDelete } = useUserDelete(selected?.id ?? '');

  const { showAlert } = useAlert();

  const filteredData = useMemo(() => {
    if (!query.length) return data?.data ?? [];

    return (data?.data ?? []).filter(
      (item) =>
        item.fullName.toLowerCase().includes(query.toLowerCase()) ||
        item.username.toLowerCase().includes(query.toLowerCase())
    );
  }, [data, query]);

  const openModal = () => {
    modalRef.current?.open();
  };

  const onAdd = () => {
    setSelected(undefined);
    openModal();
  };

  const onEdit = (item: User) => {
    setSelected(item);
    openModal();
  };

  const onDelete = (item: User) => {
    setSelected(item);
    showAlert({
      title: 'Delete team',
      message: 'Are you sure you want to delete this user?',
      type: 'confirmation',
      color: 'warning',
      handleConfirm: () => {
        const req = doDelete({})
          .then(() => {
            refetch();
          })
          .catch(() => {});

        toast.promise(req, {
          pending: 'Deleting user...',
          success: 'User deleted successfully',
          error: 'An error occurred while deleting the User',
        });
      },
    });
  };

  return (
    <>
      <h1 className="text-2xl">User</h1>

      <div className="flex flex-row w-full justify-between my-4">
        <SearchInput onSearch={setQuery} />
        <Button onClick={onAdd}>Add New User</Button>
      </div>

      <Table
        loading={isLoading}
        error={error?.message}
        header={
          <>
            <th>Full Name</th>
            <th>Email</th>
            <th>Team</th>
            <th>Roles</th>
          </>
        }
        data={filteredData}
        renderRow={(item) => (
          <>
            <td className="text-left">{item.fullName}</td>
            <td className="text-left">{item.username}</td>
            <td className="text-left">{item.team?.name || 'N/A'}</td>
            <td className="text-left">
              <UserRolesBadges roles={item.roles} />
            </td>
          </>
        )}
        onDelete={onDelete}
        onEdit={onEdit}
      />

      <UserCreateModal
        modalRef={modalRef}
        selected={selected}
        refetch={refetch}
      />
    </>
  );
};

export default UserPage;
