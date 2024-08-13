import { AverageWorkTime } from '@types';
import { FC } from 'react';

interface EmployeeWorkTimeTableProps {
  title: string;
  data: AverageWorkTime[];
}

const EmployeeWorkTimeTable: FC<EmployeeWorkTimeTableProps> = ({
  title,
  data,
}) => {
  return (
    <div className="p-2 shadow-md">
      <div className="text-xl font-medium mb-2">{title}</div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Work Hours</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.employee.id}>
              <td>{item.employee.fullName}</td>
              <td className="text-right">{item.averageWorkTime.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeWorkTimeTable;
