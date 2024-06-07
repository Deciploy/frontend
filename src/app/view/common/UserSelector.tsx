import { useUserFetch, useUserFetchByTeam } from '@api';
import { SelectInput, SelectInputProps } from '@components';
import { FC } from 'react';

interface UserSelectorProps extends Omit<SelectInputProps, 'options'> {
  teamId?: string;
}

export const UserSelector: FC<UserSelectorProps> = (props) => {
  // Fetch users request
  const { data } = props.teamId
    ? useUserFetchByTeam(props.teamId)
    : useUserFetch();

  return (
    <SelectInput
      options={
        data?.data?.map((team) => ({
          value: team.id,
          label: team.fullName,
        }))!!
      }
      {...props}
    />
  );
};
