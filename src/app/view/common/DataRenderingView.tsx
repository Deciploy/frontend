import { CircleSpinner } from '@components';
import { RiErrorWarningLine } from 'react-icons/ri';

interface DataRendingViewProps<T> {
  data: T | undefined;
  loading?: boolean;
  error?: string;
  empty?: boolean;
  emptyMessage?: string;
  render: (data: T) => JSX.Element;
}

const DataRendingView = <T extends object>({
  data,
  loading,
  error,
  render,
  empty,
  emptyMessage,
}: DataRendingViewProps<T>) => {
  if (loading) {
    <div className="flex grow flex-col items-center justify-center mt-48 h-[50vh]">
      <CircleSpinner size={48} circleClassName="text-primary" />
    </div>;
  }

  if (error) {
    return (
      <div className="flex grow flex-col items-center justify-center mt-48 h-[50vh]">
        <RiErrorWarningLine size={48} className="text-gray-500" />
        <p className="mt-4 text-center text-gray-500">{error}</p>
      </div>
    );
  }

  if (empty || !data) {
    return (
      <div className="flex grow flex-col items-center justify-center mt-48 h-[50vh]">
        <RiErrorWarningLine size={48} className="text-gray-500" />
        <p className="mt-4 text-center text-gray-500">
          {emptyMessage ?? 'No data found'}
        </p>
      </div>
    );
  }

  return render(data);
};

export default DataRendingView;
