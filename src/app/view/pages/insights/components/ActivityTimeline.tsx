import { Activity } from '@types';
import { Chart } from 'react-google-charts';

interface ActivityTimelineProps {
  activities?: Activity[];
}

const ActivityTimeline: React.FC<ActivityTimelineProps> = ({ activities }) => {
  const data = [
    [
      {
        type: 'string',
        id: 'User',
      },
      {
        type: 'string',
        id: 'Activity',
      },
      {
        type: 'date',
        id: 'Start',
      },
      {
        type: 'date',
        id: 'End',
      },
    ],

    ...(activities?.map((activity) => [
      activity.user.fullName,
      activity.application.name,
      new Date(activity.startTime),
      new Date(activity.endTime),
    ]) as any[]),
  ];
  return (
    <div className="flex flex-col w-full">
      <Chart
        width={'100%'}
        height={'80vh'}
        chartType="Timeline"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          colors: activities?.map((activity) => activity.application.theme),
        }}
      />
    </div>
  );
};

export default ActivityTimeline;
