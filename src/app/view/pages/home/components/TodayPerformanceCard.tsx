import { useDateCompanyDataFetch } from '@api';
import { getTodayPerformance } from '@helpers';
import { FC, useMemo } from 'react';
import { LoadingIndicator } from 'src/app/view/common';

const TodayPerformanceCard: FC = () => {
  const { data: response, isLoading } = useDateCompanyDataFetch('');

  const data = useMemo(() => {
    return getTodayPerformance(response?.data || []);
  }, [response]);

  const color = data.performanceIncrease > 0 ? 'success' : 'warning';
  const text = data.performanceIncrease > 0 ? 'increase' : 'decrease';

  return (
    <div
      className={`shadow-md rounded-md p-4 bg-${color}-100 border-l-4 border-${color}-400 h-[150px]`}
    >
      <LoadingIndicator loading={isLoading}>
        <div className="text-xl font-medium pb-2">Performance</div>
        <div className="flex justify-between">
          <div>
            <div className="text-4xl font-medium">
              {data.performanceIncrease} %
            </div>
            <div className="">performance {text}</div>
          </div>
          <div>
            <div className="text-lg font-medium">Today Score</div>
            <div className="text-2xl font-bold">{data.score}</div>
          </div>
        </div>
      </LoadingIndicator>
    </div>
  );
};

export default TodayPerformanceCard;
