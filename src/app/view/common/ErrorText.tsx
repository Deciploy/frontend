import { FC } from 'react';
interface ErrorTextProps {
  error?: string;
}
export const ErrorText: FC<ErrorTextProps> = ({ error }) => {
  return error ? (
    <div className="text-warning-500 text-sm mt-1">{error}</div>
  ) : null;
};
