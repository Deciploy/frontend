import { useUserFetch, useUserFetchByTeam } from '@api';
import { SelectInput, SelectInputProps } from '@components';
import { FC } from 'react';
import {
  useFetchApplications,
  useFetchApplicationsByType,
} from 'src/api/application';

interface ApplicationSelectorProps extends Omit<SelectInputProps, 'options'> {
  typeId?: string;
}

export const ApplicationSelector: FC<ApplicationSelectorProps> = (props) => {
  // Fetch  request
  const { data } = props.typeId
    ? useFetchApplicationsByType(props.typeId)
    : useFetchApplications();

  return (
    <SelectInput
      options={
        data?.data?.map((application) => ({
          value: application.id,
          label: application.name,
        }))!!
      }
      {...props}
    />
  );
};
