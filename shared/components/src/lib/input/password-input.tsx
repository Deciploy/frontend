import { FC } from 'react';
import { BaseInput, InputProps } from './base-input';

type PasswordInputProps = Omit<InputProps, 'type'>;

export const PasswordInput: FC<PasswordInputProps> = (props) => {
  return <BaseInput {...props} type="password" />;
};
