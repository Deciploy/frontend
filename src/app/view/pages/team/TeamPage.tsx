import { Button, ModalHandler, Table, TextInput, useAlert } from '@components';
import { FC, useRef, useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useDelete, useFetch } from 'src/app/utils/hooks';
import { NetworkResponse, Team } from 'src/data';

import CreateTeamModal from './CreateTeamModal';

const TeamPage: FC = () => {
  const modalRef = useRef<ModalHandler>(null);
  const { showAlert } = useAlert();
  const [selected, setSelected] = useState<Team | undefined>(undefined);
  const { data, error, refetch } = useFetch<NetworkResponse<Team[]>>('team');
  const { mutateAsync } = useDelete<NetworkResponse>(`team/${selected?.id}`);

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
        mutateAsync({})
          .then(() => refetch())
          .catch(() => {});
      },
    });
  };

  return (
    <div>
      <h1 className="font-medium">Team</h1>

      <div className="flex flex-row w-full justify-between">
        <TextInput prefix={<FaMagnifyingGlass />} placeholder="Search" />
        <Button onClick={onAdd}>Add New Team</Button>
      </div>

      <div className="mt-8">
        <Table
          header={
            <>
              <th>Name</th>
              <th>Description</th>
            </>
          }
          data={data?.data ?? []}
          renderRow={(item) => (
            <>
              <td className="text-left">{item.name}</td>
              <td className="text-left">{item.description}</td>
            </>
          )}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      </div>

      <CreateTeamModal
        modalRef={modalRef}
        selected={selected}
        refetch={refetch}
      />
    </div>
  );
};

export default TeamPage;
