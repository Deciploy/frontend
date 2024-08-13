import { useEmployeeWorkTime } from '@api';
import { getEmployeeAverageWorkTime, getEmployeeWorkStatus } from '@helpers';
import { AverageWorkTime } from '@types';
import { FC, useMemo } from 'react';
import { LoadingIndicator } from 'src/app/view/common';

const TodayWorkTimeCard: FC = () => {
  const { data: response, isLoading, error } = useEmployeeWorkTime('');

  const employeeAverageWorkTime = useMemo(() => {
    if (response?.data) {
      return response.data.map((item) => {
        const averageWorkTime = getEmployeeAverageWorkTime(item.workTime);
        return {
          employee: item.employee,
          averageWorkTime,
          status: getEmployeeWorkStatus(averageWorkTime),
        } as AverageWorkTime;
      });
    }

    return [];
  }, [response]);

  const underTimeWork = useMemo(() => {
    return employeeAverageWorkTime.filter(
      (item) => item.status === 'Zero' || item.status === 'Overtime'
    ).length;
  }, [employeeAverageWorkTime]);

  const overTimeWork = useMemo(() => {
    return employeeAverageWorkTime.filter(
      (item) => item.status === 'Overtime' || item.status === 'Regular'
    ).length;
  }, [employeeAverageWorkTime]);

  const color = underTimeWork > overTimeWork ? 'warning' : 'success';

  return (
    <div
      className={`shadow-md rounded-md p-4 bg-${color}-100 border-l-4 border-${color}-400 h-[150px]`}
    >
      <LoadingIndicator loading={isLoading}>
        <div className="text-xl font-medium pb-2">Work Time</div>
        <div className="flex justify-evenly">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-medium">{underTimeWork}</div>
            <div className="">Under time work</div>
          </div>
          <div className="text-4xl font-medium">/</div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-medium">{overTimeWork}</div>
            <div className="">Over time work</div>
          </div>
        </div>
      </LoadingIndicator>
    </div>
  );
};

export default TodayWorkTimeCard;
