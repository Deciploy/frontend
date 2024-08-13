import { AverageWorkTime } from '@types';
import { FC } from 'react';
import { Avatar } from 'src/app/view/common';

import WorkTimeIndicator from './WorkTimeIndicator';

interface EmployeeWorkTimeProps {
  data: Array<AverageWorkTime>;
}

const EmployeeWorkTime: FC<EmployeeWorkTimeProps> = ({ data }) => {
  const statusColor = {
    Overtime: 'bg-red-500',
    Regular: 'bg-green-500',
    Underwork: 'bg-blue-500',
  };

  return (
    <div className="shadow-md p-4">
      <div className="text-xl font-medium mb-2">Employee Average Work Time</div>
      {data.map((employeeTime) => (
        <div
          key={employeeTime.employee.id}
          className="grid grid-cols-3 p-4 border-b"
        >
          <div className="flex space-x-2">
            <Avatar fullName={employeeTime.employee.fullName} />
            <div>{employeeTime.employee.fullName}</div>
          </div>

          <WorkTimeIndicator employeeWorkTime={employeeTime} />
          <div className="text-right">
            {employeeTime.averageWorkTime.toFixed(2)} / 8 hours
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeWorkTime;
