import { error } from 'console';
import { ReactNode } from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';

import { Button } from '../button';
import { CircleSpinner } from '../spinner';

interface TableProps<TData> {
  header?: ReactNode;
  data: Array<TData>;
  loading?: boolean;
  error?: string;
  renderRow: (item: TData) => ReactNode;
  onDelete?: (item: TData) => void;
  onEdit?: (item: TData) => void;
}

export const Table = <TData extends object>({
  header,
  data,
  loading,
  error,
  renderRow,
  onDelete,
  onEdit,
}: TableProps<TData>) => {
  return (
    <div className="flex flex-1 flex-col items-center h-5/6">
      <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
        <thead>
          <tr>
            {header}
            {(onEdit || onDelete) && <th className="w-[10%]">Action</th>}
          </tr>
        </thead>
        <tbody>
          {!loading &&
            !error &&
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? 'bg-gray-50' : ''}
              >
                {renderRow(row)}

                {(onEdit || onDelete) && (
                  <td className="flex justify-between py-2 px-4 border-r">
                    {onEdit && (
                      <Button
                        color="secondary"
                        size="sm"
                        onClick={() => onEdit(row)}
                      >
                        Edit
                      </Button>
                    )}
                    {onDelete && (
                      <Button
                        color="warning"
                        size="sm"
                        onClick={() => onDelete(row)}
                      >
                        Delete
                      </Button>
                    )}
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
      {loading && (
        <CircleSpinner
          size={36}
          className="mt-48"
          circleClassName="text-primary"
        />
      )}

      {error && (
        <div className="flex flex-col items-center justify-center mt-48">
          <RiErrorWarningLine size={48} className="text-gray-500" />
          <p className="mt-4 text-center text-gray-500">{error}</p>
        </div>
      )}
    </div>
  );
};
