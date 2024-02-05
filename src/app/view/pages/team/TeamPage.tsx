import { FC, useRef } from 'react';
import { Table, TableColumn, Button, TextInput, ModalHandler, Modal, useAlert } from '@components'

import { FaMagnifyingGlass } from "react-icons/fa6";

const columns: TableColumn[] = [
    { key: 'name', header: 'Name' },
    { key: 'description', header: 'Description' },
];

const data = [
    { name: 'HR', description: 'Lorem Ipsum is simply dummy text, Lorem Ipsum is simply dummy text, Lorem Ipsum is simply dummy text' },
    { name: 'Development', description: 'Lorem Ipsum is simply dummy text, Lorem Ipsum is simply dummy text, Lorem Ipsum is simply dummy text' },
    { name: 'Finance', description: 'Lorem Ipsum is simply dummy text, Lorem Ipsum is simply dummy text, Lorem Ipsum is simply dummy text' },
    { name: 'HR', description: 'Lorem Ipsum is simply dummy text, Lorem Ipsum is simply dummy text, Lorem Ipsum is simply dummy text' },
    { name: 'Development', description: 'Lorem Ipsum is simply dummy text, Lorem Ipsum is simply dummy text, Lorem Ipsum is simply dummy text' },
    { name: 'Finance', description: 'Lorem Ipsum is simply dummy text, Lorem Ipsum is simply dummy text, Lorem Ipsum is simply dummy text' },

];

const TeamPage: FC = () => {
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
        <div>
            <h1 className="font-medium" >Team</h1>

            <div className="flex flex-row w-full justify-between">
                <TextInput prefix={<FaMagnifyingGlass />} placeholder='Search' />
                <Button onClick={() => openModal()}>Add New Team</Button>
            </div>

            <div className="mt-8">
                <Table columns={columns} data={data} actions={[{ name: "Edit", color: "secondary", onClick: () => openModal() }, { name: "Delete", color: "warning", onClick: () => askToDelete() }]} />
            </div>

            <Modal ref={modalRef} title="Add New Team">
                <div className="flex flex-col gap-4 ">
                    <TextInput label="Name" />
                    <TextInput label="Description" />

                    <div className="flex justify-end gap-2">
                        <Button
                            variant="text"
                            color="secondary"
                        >
                            Clear
                        </Button>
                        <Button color="primary">Save</Button>
                    </div>
                </div>
            </Modal>
        </div>

    );
};

export default TeamPage;
