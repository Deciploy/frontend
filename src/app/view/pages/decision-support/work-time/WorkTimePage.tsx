import { useEmployeeWorkTime } from '@api';
import { DateTimeInput } from '@components';
import { getEmployeeAverageWorkTime, getEmployeeWorkStatus } from '@helpers';
import { useParamsQuery } from '@hooks';
import { AverageWorkTime } from '@types';
import { FC, useMemo, useState } from 'react';
import {
  LoadingIndicator,
  TeamSelector,
  UserSelector,
} from 'src/app/view/common';

import EmployeeWorkTime from './components/EmployeeWorkTime';
import EmployeeWorkTimeTable from './components/EmployeeWorkTimeTable';
import TotalEmployeeWorkTimeChart from './components/TotalEmployeeWorkTimeChart';

const WorkTimePage: FC = () => {
  const { setParams, getParams, query } = useParamsQuery();
  const { data: response, isLoading, error } = useEmployeeWorkTime(query);

  const [uid, setUid] = useState<string | undefined>(undefined);

  const employeeWorkTime = useMemo(() => {
    if (response?.data) {
      return response.data.find((d) => d.employee.id === uid);
    }
  }, [response, uid]);

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

  return (
    <div>
      <h1 className="text-2xl">Work Time</h1>
      <div className="flex gap-3 w-3/4 py-2">
        <TeamSelector
          value={getParams('team')}
          className="w-1/4"
          placeholder="Team"
          onChange={(value) => setParams('team', value)}
        />

        <UserSelector
          value={uid}
          className="w-1/4"
          placeholder="Employee"
          onChange={setUid}
        />

        <DateTimeInput
          value={getParams('from')}
          className="w-1/4"
          placeholder="From"
          datetimeType="datetime-local"
          onChange={(value) => setParams('from', value)}
        />

        <DateTimeInput
          value={getParams('to')}
          className="w-1/4"
          placeholder="From"
          datetimeType="datetime-local"
          onChange={(value) => setParams('to', value)}
        />
      </div>

      <LoadingIndicator loading={isLoading}>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <TotalEmployeeWorkTimeChart data={employeeAverageWorkTime} />
            <EmployeeWorkTime data={employeeAverageWorkTime} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <EmployeeWorkTimeTable
              data={employeeAverageWorkTime.filter(
                (d) => d.status == 'Overtime' || d.status == 'Regular'
              )}
              title="Regular Work Time"
            />

            <EmployeeWorkTimeTable
              data={employeeAverageWorkTime.filter(
                (d) => d.status == 'Underwork' || d.status == 'Zero'
              )}
              title="Undertime Work Time"
            />
          </div>
        </div>
      </LoadingIndicator>
    </div>
  );
};

export default WorkTimePage;
