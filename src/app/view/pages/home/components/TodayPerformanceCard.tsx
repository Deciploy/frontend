import { TodayPerformance } from '@types';
import { FC } from 'react';

interface TodayPerformanceCardProps {
  data: TodayPerformance;
}

const TodayPerformanceCard: FC<TodayPerformanceCardProps> = ({ data }) => {
  const color = data.performanceIncrease > 0 ? 'success' : 'warning';
  const text = data.performanceIncrease > 0 ? 'increase' : 'decrease';

  return (
    <div>
      <div
        className={`shadow-md rounded-md p-4 bg-${color}-100 border-l-4 border-${color}-400 min-h-[150px]`}
      >
        <div className="text-xl font-medium pb-2">Today Performance</div>
        <div className="flex justify-between">
          <div>
            <div className="text-5xl font-medium">
              {data.performanceIncrease} %
            </div>
            <div className="">performance {text}</div>
          </div>
          <div>
            <div className="text-lg font-medium">Today Score</div>
            <div className="text-2xl font-bold">{data.score}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayPerformanceCard;
