import { FC } from 'react';

interface InputProps {
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
   * If true, the error style will be applied
   * @default false
   * */
  isError?: boolean;

  /**
   * The error message
   * */
  message?: string;

  /**
   * The type of the input
   * */
  type?: React.HTMLInputTypeAttribute;

  /**
   * The onChange event handler
   * */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({
  value,
  label,
  placeholder,
  isError,
  message,
  type = 'text',
  onChange,
}) => {
  const borderStyle = isError
    ? 'border-warning'
    : ' focus:ring-primary-500 focus:border-primary-500';

  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`bg-secondary-200 border ${borderStyle} text-gray-900 text-sm rounded-full leading-tight focus:outline-none block w-full p-2.5`}
        placeholder={placeholder}
      />

      {message && <p className="text-warning-500 text-sm mt-1">{message}</p>}
    </div>
  );
};
