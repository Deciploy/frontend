import { useTrackingDataFetch } from '@api';
import { DateTimeInput } from '@components';
import { useParamsQuery } from '@hooks';
import { FC } from 'react';
import {
  ApplicationSelector,
  ApplicationTypeSelector,
  TeamSelector,
  UserSelector,
} from 'src/app/view/common';
import DataRendingView from 'src/app/view/common/DataRenderingView';

import ActivityTimeline from './ActivityTimeline';

const ActivityTrack: FC = () => {
  const { setParams, getParams, query } = useParamsQuery();
  const { data: response, isLoading, error } = useTrackingDataFetch(query);

  return (
    <>
      <div className="grid grid-cols-6 gap-4 my-4">
        <TeamSelector
          value={getParams('team')}
          label="Team"
          onChange={(teamId) => setParams('team', teamId)}
        />
        <UserSelector
          teamId={getParams('team')}
          value={getParams('user')}
          onChange={(userId) => setParams('user', userId)}
          label="User"
        />
        <ApplicationTypeSelector
          value={getParams('type')}
          onChange={(typeId) => setParams('type', typeId)}
          label="Application Type"
        />
        <ApplicationSelector
          typeId={getParams('type')}
          value={getParams('application')}
          onChange={(applicationId) => setParams('application', applicationId)}
          label="Application"
        />
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

      <DataRendingView
        data={response}
        loading={isLoading}
        error={error?.message}
        render={(response) => <ActivityTimeline activities={response.data} />}
      />
    </>
  );
};

export default ActivityTrack;
