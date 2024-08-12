import {
  useDateCompanyDataFetch,
  useEmployeeScoreDataFetch,
  useEmployeeWorkTime,
  useTeamScoreDataFetch,
} from '@api';
import { getTodayPerformance } from '@helpers';
import { FC } from 'react';

import { LoadingIndicator } from '../../common';
import CompanyPerformanceChart from './components/CompanyPerformanceChart';
import EmployeeScoreCard from './components/EmployeeScoreCard';
import NowClockInCard from './components/NowClockInCard';
import TeamScoreCard from './components/TeamScoreCard';
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
      <LoadingIndicator
        loading={
          isCompanyPerformanceLoading ||
          isEmployeeScoreLoading ||
          isTeamScoreLoading
        }
      >
        <div className="grid grid-cols-3 gap-2">
          <NowClockInCard />
          <TodayPerformanceCard
            data={getTodayPerformance(companyPerformance?.data || [])}
          />
          <TodayWorkTimeCard />
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2">
            <CompanyPerformanceChart data={companyPerformance?.data || []} />
          </div>

          <div className="flex flex-col">
            <EmployeeScoreCard data={employeeScore?.data || []} />
            <TeamScoreCard data={teamScore?.data || []} />
          </div>
        </div>
      </LoadingIndicator>
    </div>
  );
};

export default HomePage;
