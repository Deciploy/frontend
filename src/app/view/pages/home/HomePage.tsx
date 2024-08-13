import {
  useEmployeeScoreDataFetch,
  useEmployeeWorkTime,
  useTeamScoreDataFetch,
} from '@api';
import { FC } from 'react';

import ApplicationUsageList from './components/ApplicationUsage';
import CompanyPerformanceChart from './components/CompanyPerformanceChart';
import NowClockInCard from './components/NowClockInCard';
import TodayPerformanceCard from './components/TodayPerformanceCard';
import TodayWorkTimeCard from './components/TodayWorkTimeCard';

const HomePage: FC = () => {
  const { data: companyPerformance, isLoading: isCompanyPerformanceLoading } =
    useDateCompanyDataFetch('');

  const { data: employeeScore, isLoading: isEmployeeScoreLoading } =
    useEmployeeScoreDataFetch('');

  const { data: teamScore, isLoading: isTeamScoreLoading } =
    useTeamScoreDataFetch('');

  const {
    data: workTime,
    isLoading: isWorkTimeLoading,
    error,
  } = useEmployeeWorkTime('');

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-2">
        <NowClockInCard />
        <TodayPerformanceCard />
        <TodayWorkTimeCard />
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2">
          <CompanyPerformanceChart />
        </div>

        <div className="flex flex-col">
          <ApplicationUsageList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
