import { FC, ReactNode, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';

import { SelectOption } from '../types';

export interface SelectInputProps {
  /**
   * The value of the input
   * */
  value?: string;

  /**
   * The options of the input
   * */
  options: SelectOption[];

  /**
   * The label of the input
   * */
  label?: string;

  /**
   * The prefix of the input
   * */
  prefix?: ReactNode;

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
  className,
  isError,
  message,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | undefined>(value);

  const handleSelect = (option: SelectOption) => {
    setSelected(option.value);
    setIsOpen(false);

    onChange && onChange(option.value);
  };

  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="text-sm">{label}</label>}
      <div className="relative inline-block">
        <button
          type="button"
          className={`focus:outline-none rounded-md border py-2 px-3 flex items-center justify-between w-full first-letter first-letter first-letter ${
            isError
              ? 'border-warning'
              : 'border-gray-300 focus-within:border-primary-300'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {prefix && <div>{prefix}</div>}
          {selected
            ? options.find((option) => option.value === selected)?.label ||
              placeholder ||
              'Select'
            : placeholder || 'Select'}
          <FaAngleDown className="text-gray-500" />
        </button>
        {isOpen && (
          <div className="absolute z-10 top-full left-0 w-full bg-white rounded-md shadow-md overflow-hidden">
            <ul className="py-1">
              {options.map((option) => (
                <li
                  key={option.value}
                  className="text-gray-700 cursor-pointer hover:bg-gray-100 px-3 py-2"
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {message && <p className="text-warning-500 text-sm mt-1">{message}</p>}
    </div>
  );
};
