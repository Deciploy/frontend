import { useUserFetch } from '@api';
import { Table } from '@components';
import { useMemo, useState } from 'react';

import BarChart from './components/BarChart';
import PieChart from './components/PieChart';

const DashboardPage: React.FC = () => {
  // Fetch all users request
  const { data, error, isLoading, refetch } = useUserFetch();
  const [query, setQuery] = useState('');

  const filteredData = useMemo(() => {
    if (!query.length) return data?.data ?? [];

    return (data?.data ?? []).filter(
      (item) =>
        item.fullName.toLowerCase().includes(query.toLowerCase()) ||
        item.username.toLowerCase().includes(query.toLowerCase())
    );
  }, [data, query]);

  return (
    <div className="p-4 gap-4">
      <h1 className="text-2xl mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl mb-2 text-center">
            <span className="bg-primary text-secondary p-2 rounded-lg">
              Productivity
            </span>
          </h2>
          <br />
          <div className="h-75 md:h-auto">
            <BarChart />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl mb-2 text-center">
            <span className="bg-primary text-secondary p-2 rounded-lg">
              Activity Usage
            </span>
          </h2>
          <br />
          <div className="h-75 md:h-auto p-6 ">
            <PieChart />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Table
            loading={isLoading}
            error={error?.message}
            header={
              <>
                <th>Employee</th>
                <th>State</th>
                <th>Work Time</th>
              </>
            }
            data={filteredData}
            renderRow={(item) => (
              <>
                <td className="text-left">{item.fullName}</td>
                <td className="text-left">{item.username}</td>
                <td className="text-left">{item.team?.name || 'N/A'}</td>
              </>
            )}
          />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl mb-2 text-center">
            <span className="bg-primary text-secondary p-2 rounded-lg">
              Team Productivity
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
