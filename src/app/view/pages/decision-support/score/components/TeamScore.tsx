import { useTeamScoreDataFetch } from '@api';
import { DateTimeInput, Table } from '@components';
import { useParamsQuery } from '@hooks';
import { FC } from 'react';
import DataRendingView from 'src/app/view/common/DataRenderingView';

const TeamScore: FC = () => {
  const { setParams, getParams, query } = useParamsQuery();
  const { data: response, isLoading, error } = useTeamScoreDataFetch(query);

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
            <th>Team</th>
            <th>Score</th>
          </>
        }
        data={response?.data || []}
        renderRow={(item, index) => (
          <>
            <td className="text-left">{index + 1}</td>
            <td className="text-left">{item.team.name}</td>
            <td className="text-right">{item.score}</td>
          </>
        )}
      />
    </>
  );
};

export default TeamScore;
