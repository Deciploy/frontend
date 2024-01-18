import { FC, PropsWithChildren } from 'react';

import { CircleSpinner } from '../spinner';

export interface ButtonProps {
  /**
   * The variant of the button
   * @default 'filled'
   * */
  variant?: 'filled' | 'outlined' | 'rounded' | 'text';

  /**
   * The color of the button
   * @default 'primary'
   * */
  color?: 'primary' | 'secondary' | 'warning' | 'success';

  /**
   * The size of the button
   * @default 'md'
   * */
  size?: 'sm' | 'md' | 'lg';

  /**
   * If true, the button will be disabled
   * @default false
   * */
  disabled?: boolean;

  /**
   * If true, the button will be full width
   * @default false
   * */
  fullWidth?: boolean;

  /**
   * If true, the button will be loading
   * @default false
   * */
  loading?: boolean;

  /**
   * The loading text
   * @default 'Loading...'
   * */
  loadingText?: string;

  /**
   * The onClick event handler
   * */
  onClick?: () => void;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  variant = 'filled',
  color = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  loadingText = 'Loading...',
  onClick,
}) => {
  return (
    <button
      type="button"
      disabled={disabled || loading}
      onClick={onClick && onClick}
      className={`${styles[variant][color]} ${sizes[size]} ${
        fullWidth ? 'w-full' : ''
      } flex justify-between items-center gap-2 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed`}
    >
      {loading ? (
        <>
          <CircleSpinner />
          {loadingText}
        </>
      ) : (
        children
      )}
    </button>
  );
};

const sizes = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-md',
  lg: 'h-12 px-6 text-lg',
};

const styles = {
  filled: {
    primary: 'bg-primary-500 hover:bg-primary-700 text-white rounded-lg',
    secondary: 'bg-secondary-500 hover:bg-secondary-700 text-white rounded-lg',
    warning: 'bg-warning-500 hover:bg-warning-700 text-white rounded-lg',
    success: 'bg-success-500 hover:bg-success-700 text-white rounded-lg',
  },
  outlined: {
    primary:
      'bg-transparent hover:bg-primary-500 text-primary-700 hover:text-white border border-primary hover:border-transparent rounded-lg',
    secondary:
      'bg-transparent hover:bg-secondary-500 text-secondary-700  hover:text-white  border border-secondary hover:border-transparent rounded-lg',
    warning:
      'bg-transparent hover:bg-warning-500 text-warning-700  hover:text-white border border-warning hover:border-transparent rounded-lg',
    success:
      'bg-transparent hover:bg-success-500 text-success-700 hover:text-white border border-success hover:border-transparent rounded-lg',
  },
  rounded: {
    primary: 'bg-primary hover:bg-primary-700 text-white rounded-full ',
    secondary: 'bg-secondary hover:bg-secondary-700 text-black rounded-full',
    warning: 'bg-warning hover:bg-warning-700 text-white rounded-full',
    success: 'bg-success hover:bg-success-700 text-white rounded-full',
  },
  text: {
    primary:
      'bg-transparent hover:bg-primary-500 text-primary-700  hover:text-white  border border-primary hover:border-transparent rounded-lg',
    secondary:
      'bg-transparent hover:bg-secondary-500 text-secondary-700 hover:text-white  border border-secondary hover:border-transparent rounded-lg',
    warning:
      'bg-transparent hover:bg-warning-500 text-warning-700 hover:text-white  border border-warning hover:border-transparent rounded-lg',
    success:
      'bg-transparent hover:bg-success-500 text-success-700 hover:text-white border border-success hover:border-transparent rounded-lg',
  },
};
