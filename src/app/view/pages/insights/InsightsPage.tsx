import { TabView } from '@components';
import { FC } from 'react';

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
