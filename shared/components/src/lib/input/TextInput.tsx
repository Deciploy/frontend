import { FC } from 'react';
import { BaseInput, InputProps } from './BaseInput';

interface TextInputProps extends Omit<InputProps, 'type'> {
  /**
   * The type of the input
   * @default text
   * */
  textInputType?: 'text' | 'email';
}

export const TextInput: FC<TextInputProps> = (props) => {
  return <BaseInput {...props} type={props.textInputType} />;
};
