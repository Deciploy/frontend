import { useTeamDelete, useTeamFetch } from '@api';
import { Button, ModalHandler, Table, useAlert } from '@components';
import { Team } from '@types';
import { FC, useMemo, useRef, useState } from 'react';
import { toast } from 'react-toastify';

import { SearchInput } from '../../common';
import CreateTeamModal from './components/CreateTeamModal';

const TeamPage: FC = () => {
  const modalRef = useRef<ModalHandler>(null);

  const [selected, setSelected] = useState<Team | undefined>(undefined);
  const [query, setQuery] = useState('');

  // Fetch teams request
  const { data, error, isLoading, refetch } = useTeamFetch();

  // Delete team request
  const { mutateAsync: doDelete } = useTeamDelete(selected?.id ?? '');

  const { showAlert } = useAlert();

  const filteredData = useMemo(() => {
    if (!query.length) return data?.data ?? [];

    return (data?.data ?? []).filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );
  }, [data, query]);

  const openModal = () => {
    modalRef.current?.open();
  };

  const onAdd = () => {
    setSelected(undefined);
    openModal();
  };

  const onEdit = (item: Team) => {
    setSelected(item);
    openModal();
  };

  const onDelete = (item: Team) => {
    setSelected(item);
    showAlert({
      title: 'Delete team',
      message: 'Are you sure you want to delete this team?',
      type: 'confirmation',
      color: 'warning',
      handleConfirm: () => {
        const req = doDelete({})
          .then(() => {
            refetch();
          })
          .catch(() => {});

        toast.promise(req, {
          pending: 'Deleting team...',
          success: 'Team deleted successfully',
          error: 'An error occurred while deleting the team',
        });
      },
    });
  };

  return (
    <>
      <h1 className="text-2xl">Team</h1>

      <div className="flex flex-row w-full justify-between my-4">
        <SearchInput onSearch={setQuery} />
        <Button onClick={onAdd}>Add New Team</Button>
      </div>

      <Table
        loading={isLoading}
        error={error?.message}
        header={
          <>
            <th>Name</th>
            <th>Description</th>
          </>
        }
        data={filteredData}
        renderRow={(item) => (
          <>
            <td className="text-left">{item.name}</td>
            <td className="text-left">{item.description}</td>
          </>
        )}
        onDelete={onDelete}
        onEdit={onEdit}
      />

      <CreateTeamModal
        modalRef={modalRef}
        selected={selected}
        refetch={refetch}
      />
    </>
  );
};

export default TeamPage;
