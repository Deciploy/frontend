import { FC, PropsWithChildren } from 'react';

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
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {loading ? loadingText : children}
    </button>
  );
};

const sizes = {
  sm: 'py-1 px-2 text-sm',
  md: 'py-2 px-4 text-md',
  lg: 'py-3 px-6 text-lg',
};

const styles = {
  filled: {
    primary: 'bg-primary hover:bg-primary-700 text-white font-bold rounded ',
    secondary:
      'bg-secondary hover:bg-secondary-700 text-black font-bold rounded',
    warning: 'bg-warning hover:bg-warning-700 text-white font-bold rounded',
    success: 'bg-success hover:bg-success-700 text-white font-bold rounded',
  },
  outlined: {
    primary:
      'bg-transparent hover:bg-primary text-primary-700 font-semibold hover:text-white border border-primary hover:border-transparent rounded',
    secondary:
      'bg-transparent hover:bg-secondary text-secondary-700 font-semibold hover:text-white  border border-secondary hover:border-transparent rounded',
    warning:
      'bg-transparent hover:bg-warning text-warning-700 font-semibold hover:text-white border border-warning hover:border-transparent rounded',
    success:
      'bg-transparent hover:bg-success text-success-700 font-semibold hover:text-white border border-success hover:border-transparent rounded',
  },
  rounded: {
    primary:
      'bg-primary hover:bg-primary-700 text-white font-bold rounded-full ',
    secondary:
      'bg-secondary hover:bg-secondary-700 text-black font-bold rounded-full',
    warning:
      'bg-warning hover:bg-warning-700 text-white font-bold rounded-full',
    success:
      'bg-success hover:bg-success-700 text-white font-bold rounded-full',
  },
  text: {
    primary:
      'bg-transparent hover:bg-primary text-primary-700 font-semibold hover:text-white  border border-primary hover:border-transparent rounded',
    secondary:
      'bg-transparent hover:bg-secondary text-secondary-700 font-semibold hover:text-white  border border-secondary hover:border-transparent rounded',
    warning:
      'bg-transparent hover:bg-warning text-warning-700 font-semibold hover:text-white  border border-warning hover:border-transparent rounded',
    success:
      'bg-transparent hover:bg-success text-success-700 font-semibold hover:text-white border border-success hover:border-transparent rounded',
  },
};
