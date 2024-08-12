import { FC } from 'react';

import CompanyPerformanceChart from './components/CompanyPerformanceChart';
import EmployeeScoreCard from './components/EmployeeScoreCard';
import TeamScoreCard from './components/TeamScoreCard';

const HomePage: FC = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="col-span-2">
        <CompanyPerformanceChart />
      </div>

      <div className="flex flex-col">
        <EmployeeScoreCard />
        <TeamScoreCard />
      </div>
    </div>
  );
};

export default HomePage;
