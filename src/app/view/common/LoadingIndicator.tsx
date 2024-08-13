import { CircleSpinner } from '@components';
import { FC, PropsWithChildren } from 'react';

interface LoadingIndicatorProps {
  loading: boolean;
}

export const LoadingIndicator: FC<PropsWithChildren<LoadingIndicatorProps>> = ({
  children,
  loading,
}) => {
  if (loading) {
    return (
      <div className="flex grow flex-col items-center justify-center h-full mt-auto">
        <CircleSpinner size={48} circleClassName="text-primary" />
      </div>
    );
  }

  return <>{children}</>;
};
