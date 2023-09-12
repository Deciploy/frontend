import { FC } from 'react';

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
   * The placeholder of the input
   * */
  placeholder?: string;

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
  isError,
  message,
  fullWidth = false,
  onChange,
}) => {
  const borderStyle = isError
    ? 'border-warning'
    : ' focus:ring-primary-500 focus:border-primary-500';

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>

      <select
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className={`bg-secondary-200 border ${borderStyle} text-gray-900 text-sm rounded-full leading-tight focus:outline-none block w-full p-2.5`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {message && <p className="text-warning-500 text-sm mt-1">{message}</p>}
    </div>
  );
};
