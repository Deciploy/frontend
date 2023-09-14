import { FC } from 'react';
import { BaseInput, InputProps } from './BaseInput';

interface DateTimeInputProps extends Omit<InputProps, 'type'> {
  /**
   * The format of the date
   * @default date
   * */
  datetimeType?: 'date' | 'datetime-local' | 'month' | 'time' | 'week';
}

export const DateTimeInput: FC<DateTimeInputProps> = (props) => {
  return <BaseInput {...props} type={props.datetimeType ?? 'date'} />;
};
