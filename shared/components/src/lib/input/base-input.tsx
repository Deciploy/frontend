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
    <div className={`flex flex-col ${className}`}>
      {label && <label className="text-sm">{label}</label>}
      <div
        className={`focus:outline-none rounded-md border py-2 px-3 flex items-center justify-between w-full first-letter gap-2 ${
          isError
            ? 'border-warning'
            : 'border-gray-300 focus-within:border-primary-300'
        }`}
      >
        {prefix && <div>{prefix}</div>}
        <input
          className={`outline-none  w-full`}
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
