import { FC, ReactNode } from 'react';

import { Button } from '../button';

interface TableProps<TData> {
  header?: ReactNode;
  data: Array<TData>;
  renderRow: (item: TData) => ReactNode;
  onDelete?: (item: TData) => void;
  onEdit?: (item: TData) => void;
}

export const Table = <TData extends object>({
  header,
  data,
  renderRow,
  onDelete,
  onEdit,
}: TableProps<TData>) => {
  return (
    <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
      <thead>
        <tr>
          {header}
          {(onEdit || onDelete) && <th style={{ width: '14%' }}>Action</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : ''}>
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
  );
};
