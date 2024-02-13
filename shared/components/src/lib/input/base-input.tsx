import { FC, HTMLInputTypeAttribute, ReactNode } from 'react';

export interface InputProps {
  /**
   * The value of the input
   */
  value?: string;

  /**
   * The label of the input
   * */
  label?: string;

  /**
   * The placeholder of the input
   */
  placeholder?: string;

  /**
   * Class name of the input
   */
  className?: string;

  /**
   * If true, the error style will be applied
   * @default false
   * */
  isError?: boolean;

  /**
   * The error message
   * */
  message?: string;

  /**
   * The prefix of the input
   * */
  prefix?: ReactNode;

  /**
   * The suffix of the input
   * */
  suffix?: ReactNode;

  /**
   * The type of the input
   * */
  type?: HTMLInputTypeAttribute;

  /**
   * The onChange event handler
   * */
  onChange?: (e: string) => void;

  /**
   * The onBlur event handler
   * */
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
}

export const BaseInput: FC<InputProps> = ({
  value,
  label,
  placeholder,
  isError,
  message,
  type = 'text',
  className,
  onChange,
  onBlur: handleBlur,
  prefix,
  suffix,
}) => {
  return (
    <div className="flex flex-col">
      {label && <label className="text-sm">{label}</label>}
      <div
        className={`flex gap-2 items-center border ${
          isError
            ? 'border-warning'
            : 'border-gray-200 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary'
        }  rounded-md px-4 py-2 w-full bg-gray-200 shadow-md ${className}`}
      >
        {prefix && <div>{prefix}</div>}
        <input
          className={`outline-none bg-gray-200 w-full`}
          value={value}
          placeholder={placeholder}
          type={type}
          onChange={(e) => onChange && onChange(e.target.value)}
          onBlur={(e) => handleBlur && handleBlur(e)}
        />
        {suffix && <div>{suffix}</div>}
      </div>
      {isError && (
        <div className="text-warning-500 text-sm mt-1">{message}</div>
      )}
    </div>
  );
};
