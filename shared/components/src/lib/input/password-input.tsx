import { FC, useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

import { BaseInput, InputProps } from './base-input';

type PasswordInputProps = Omit<InputProps, 'type'>;

export const PasswordInput: FC<PasswordInputProps> = (props) => {
  const [type, setType] = useState<'password' | 'text'>('password');

  return (
    <BaseInput
      {...props}
      type={type}
      suffix={
        type === 'password' ? (
          <MdVisibilityOff onClick={() => setType('text')} size={16} />
        ) : (
          <MdVisibility onClick={() => setType('password')} size={16} />
        )
      }
    />
  );
};
