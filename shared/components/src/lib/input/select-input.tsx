import { FC, ReactNode } from 'react';

interface SelectInputProps {
  /**
   * The value of the input
   * */
  value?: string;

  /**
   * The options of the input
   * */
  options?: {
    value: string;
    label: string;
  }[];

  /**
   * The label of the input
   * */
  label?: string;

  /**
   * The prefix of the input
   * */
  prefix?: ReactNode;

  /**
   * The suffix of the input
   * */
  suffix?: ReactNode;

  /**
   * The placeholder of the input
   * */
  placeholder?: string;

  /**
   * Class name of the input
   * */
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
   * If true, the input will be full width
   * @default false
   * */
  fullWidth?: boolean;

  /**
   * The onChange event handler
   * */
  onChange?: (value: string) => void;
}

export const SelectInput: FC<SelectInputProps> = ({
  value,
  options = [],
  label,
  placeholder,
  prefix,
  suffix,
  className,
  isError,
  message,
  onChange,
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

        <select
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange?.(e.target.value)}
          className={`outline-none bg-gray-200 w-full`}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {suffix && <div>{suffix}</div>}
      </div>
      {message && <p className="text-warning-500 text-sm mt-1">{message}</p>}
    </div>
  );
};
