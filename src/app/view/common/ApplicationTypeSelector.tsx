import { useTeamFetch } from '@api';
import { SelectInput, SelectInputProps } from '@components';
import { FC } from 'react';
import { useFetchApplicationTypes } from 'src/api/application';

interface ApplicationTypeSelectorProps
  extends Omit<SelectInputProps, 'options'> {}

export const ApplicationTypeSelector: FC<ApplicationTypeSelectorProps> = (
  props
) => {
  // Fetch  request
  const { data } = useFetchApplicationTypes();

  return (
    <SelectInput
      options={
        data?.data?.map((type) => ({
          value: type.id,
          label: type.name,
        }))!!
      }
      {...props}
    />
  );
};
