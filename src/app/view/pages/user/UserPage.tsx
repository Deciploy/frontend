import { FC, useRef } from 'react';
import { Table, TableColumn, Button, TextInput, ModalHandler, Modal, useAlert } from '@components'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { UserSchema } from '@deciploy/constants';

const columns: TableColumn[] = [
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    { key: 'role', header: 'Role' },
    { key: 'team', header: 'Team' },
];

const data = [
    { name: 'Lorem Ipsum', email: 'Lorem@gmail.com', role: 'Manager', team: 'HR', },
    { name: 'Lorem Ipsum', email: 'Lorem@gmail.com', role: 'Manager', team: 'HR', },
    { name: 'Lorem Ipsum', email: 'Lorem@gmail.com', role: 'Manager', team: 'HR', },
    { name: 'Lorem Ipsum', email: 'Lorem@gmail.com', role: 'Manager', team: 'HR', },
    { name: 'Lorem Ipsum', email: 'Lorem@gmail.com', role: 'Manager', team: 'HR', },
    { name: 'Lorem Ipsum', email: 'Lorem@gmail.com', role: 'Manager', team: 'HR', },
];

interface UserValues {
    name: string;
    email: string;
    role: string;
    team: string;
}

const UserPage: FC = () => {
    const modalRef = useRef<ModalHandler>(null);
    const { showAlert } = useAlert();

    const initialValues: UserValues = {
        name: '',
        email: '',
        role: '',
        team: ''
    };

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

    const handleSubmit = (values: any) => {
        console.log(values);
    };

    return (
        <div>
            <h1 className="font-medium" >User</h1>

            <div className="flex flex-row w-full justify-between">
                <TextInput prefix={<FaMagnifyingGlass />} placeholder='Search' />
                <Button onClick={() => openModal()}>Add New User</Button>
            </div>

            <div className="mt-8">
                <Table columns={columns} data={data} actions={[{ name: "Edit", color: "secondary", onClick: () => openModal() }, { name: "Delete", color: "warning", onClick: () => askToDelete() }]} />
            </div>

            <Modal ref={modalRef} title="Add New User">
                <Formik
                    initialValues={initialValues}
                    validationSchema={UserSchema}
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
                                message={errors.name} />
                            <TextInput
                                label="Email"
                                onChange={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                isError={!!errors.email}
                                message={errors.email} />
                            <TextInput
                                label="Role"
                                onChange={handleChange('role')}
                                onBlur={handleBlur('role')}
                                value={values.role}
                                isError={!!errors.role}
                                message={errors.role} />
                            <TextInput
                                label="Team"
                                onChange={handleChange('team')}
                                onBlur={handleBlur('team')}
                                value={values.team}
                                isError={!!errors.team}
                                message={errors.team} />

                            <div className="flex justify-end gap-2">
                                <Button
                                    variant="text"
                                    color="secondary"
                                >
                                    Clear
                                </Button>
                                <Button color="primary" onClick={handleSubmit}>Save</Button>
                            </div>
                        </div>
                    )}
                </Formik>
            </Modal>
        </div>

    );
};

export default UserPage;
