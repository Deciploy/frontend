import { useTrackingDataFetch } from '@api';
import { DateTimeInput, TabView } from '@components';
import { useParamsQuery } from '@hooks';
import { FC } from 'react';

import {
  ApplicationSelector,
  ApplicationTypeSelector,
  TeamSelector,
  UserSelector,
} from '../../common';
import DataRendingView from '../../common/DataRenderingView';
import ActivityTimeline from './components/ActivityTimeline';
import ActivityTrack from './components/ActivityTrack';
import TimeTrack from './components/TimeTrack';

const InsightsPage: FC = () => {
  return (
    <>
      <h1 className="text-2xl">Insights</h1>

      <TabView
        items={[
          {
            title: 'Activity',
            component: <ActivityTrack />,
          },
          {
            title: 'Time',
            component: <TimeTrack />,
          },
        ]}
      />
    </>
  );
};

export default InsightsPage;
