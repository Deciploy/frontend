import { useTeamFetch } from '@api';
import { SelectInput, SelectInputProps } from '@components';
import { FC } from 'react';

interface TeamSelectorProps extends Omit<SelectInputProps, 'options'> {}

export const TeamSelector: FC<TeamSelectorProps> = (props) => {
  // Fetch teams request
  const { data } = useTeamFetch();

  return (
    <SelectInput
      options={
        data?.data?.map((team) => ({
          value: team.id,
          label: team.name,
        }))!!
      }
      {...props}
    />
  );
};
