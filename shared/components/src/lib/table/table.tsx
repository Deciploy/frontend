import React, { FC, ReactNode } from 'react';
import { Button } from '../button';

export interface Action {
    name: string;
    color?: 'primary' | 'secondary' | 'warning' | 'success';
    onClick: (item: Record<string, any>) => void
}

export interface TableColumn {
    key: string;
    header: string;
}

export interface TableProps {
    columns: TableColumn[];
    data: Record<string, any>[];
    actions?: Action[];
}

export const Table: FC<TableProps> = ({ columns, data, actions }) => {
    return (
        <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
            <thead>
                <tr className="bg-primary text-white">
                    {columns.map((column) => (
                        <th
                            key={column.key}
                            className="py-2 px-4 border-r cursor-pointer"
                        >
                            {column.header}
                        </th>
                    ))}
                    <th className="py-2 px-4 border-r">Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : ''}>
                        {columns.map((column) => (
                            <td key={column.key} className="py-2 px-4 border-r">
                                {row[column.key]}
                            </td>
                        ))}
                        <td className="flex justify-between py-2 px-4 w-41 border-r">
                            {actions &&
                                actions.map((action) => (
                                    <Button
                                        key={action.name}
                                        color={action.color}
                                        onClick={() => action.onClick(row)}
                                    >
                                        {action.name}
                                    </Button>
                                ))}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};