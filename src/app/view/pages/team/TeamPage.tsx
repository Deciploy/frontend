import {
  Button,
  ModalHandler,
  Table,
  TableColumn,
  TextInput,
  useAlert,
} from '@components';
import { FC, useRef } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useFetch } from 'src/app/utils/hooks';
import { Team } from 'src/data';

import CreateTeamModal from './CreateTeamModal';

const columns: TableColumn[] = [
  { key: 'name', header: 'Name' },
  { key: 'description', header: 'Description' },
];

const TeamPage: FC = () => {
  const modalRef = useRef<ModalHandler>(null);
  const { showAlert } = useAlert();
  const { data, error } = useFetch<Team[]>('team');

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
    <div>
      <h1 className="font-medium">Team</h1>

      <div className="flex flex-row w-full justify-between">
        <TextInput prefix={<FaMagnifyingGlass />} placeholder="Search" />
        <Button onClick={() => openModal()}>Add New Team</Button>
      </div>

      <div className="mt-8">
        <Table
          columns={columns}
          data={data ?? []}
          actions={[
            { name: 'Edit', color: 'secondary', onClick: () => openModal() },
            { name: 'Delete', color: 'warning', onClick: () => askToDelete() },
          ]}
        />
      </div>

      <CreateTeamModal modalRef={modalRef} />
    </div>
  );
};

export default TeamPage;
