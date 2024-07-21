import { Activity, Time } from '@types';
import { Chart } from 'react-google-charts';

interface ActivityTimelineProps {
  times?: Time[];
}

const TimeTimeline: React.FC<ActivityTimelineProps> = ({ times }) => {
  const data = [
    [
      {
        type: 'string',
        id: 'User',
      },
      {
        type: 'date',
        id: 'Clock In',
      },
      {
        type: 'date',
        id: 'Clock Out',
      },
    ],

    ...(times?.map((time) => [
      time.user.fullName,
      new Date(time.clockIn),
      new Date(time.clockOut || new Date().toISOString()),
    ]) as any[]),
  ];
  return (
    <div className="flex flex-col w-full">
      <Chart
        width={'100%'}
        height={'80vh'}
        chartType="Timeline"
        loader={<div>Loading....</div>}
        data={data}
      />
    </div>
  );
};

export default TimeTimeline;
