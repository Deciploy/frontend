import { TabView } from '@components';
import { FC } from 'react';

import EmployeeScore from './components/EmployeeScore';
import TeamScore from './components/TeamScore';

const ScorePage: FC = () => {
  return (
    <>
      <h1 className="text-2xl">Score</h1>

      <TabView
        items={[
          {
            title: 'Employee',
            component: <EmployeeScore />,
          },
          {
            title: 'Team',
            component: <TeamScore />,
          },
        ]}
      />
    </>
  );
};

export default ScorePage;
