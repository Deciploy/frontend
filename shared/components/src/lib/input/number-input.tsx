import { FC } from 'react';

import { BaseInput, InputProps } from './base-input';

interface NumberInputProps extends Omit<InputProps, 'type'> {}

export const NumberInput: FC<NumberInputProps> = (props) => {
  return <BaseInput {...props} type="number" />;
};
