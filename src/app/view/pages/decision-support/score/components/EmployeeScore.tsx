import { useEmployeeScoreDataFetch } from '@api';
import { DateTimeInput, Table } from '@components';
import { useParamsQuery } from '@hooks';
import { FC } from 'react';

const EmployeeScore: FC = () => {
  const { setParams, getParams, query } = useParamsQuery();
  const { data: response, isLoading, error } = useEmployeeScoreDataFetch(query);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 my-4">
        <DateTimeInput
          value={getParams('from')}
          onChange={(from) => setParams('from', from)}
          label="From"
          placeholder="From"
          datetimeType="datetime-local"
        />
        <DateTimeInput
          value={getParams('to')}
          onChange={(to) => setParams('to', to)}
          label="To"
          placeholder="From"
          datetimeType="datetime-local"
        />
      </div>
      <Table
        loading={isLoading}
        error={error?.message}
        header={
          <>
            <th>Rank</th>
            <th>Employee</th>
            <th>Score</th>
          </>
        }
        data={response?.data || []}
        renderRow={(item, index) => (
          <>
            <td className="text-left">{index + 1}</td>
            <td className="text-left">{item.user.fullName}</td>
            <td className="text-right">{item.score}</td>
          </>
        )}
      />
    </>
  );
};

export default EmployeeScore;
