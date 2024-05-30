import { MultiSelectInput, MultiSelectInputProps } from '@components';
import { USER_ROLES } from '@deciploy/constants';
import { FC } from 'react';

interface UserRolesSelectorProps
  extends Omit<MultiSelectInputProps, 'options'> {}

export const UserRolesSelector: FC<UserRolesSelectorProps> = (props) => {
  return (
    <MultiSelectInput
      options={USER_ROLES.map((role) => ({ value: role, label: role }))}
      label="User Roles"
      {...props}
    />
  );
};
