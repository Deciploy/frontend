import { useDateCompanyDataFetch } from '@api';
import { DateCompanyScore } from '@types';
import { FC, useMemo } from 'react';
import Chart from 'react-google-charts';
import { LoadingIndicator } from 'src/app/view/common';

const CompanyPerformanceChart: FC = () => {
  const { data: response, isLoading } = useDateCompanyDataFetch('');

  const chartData = useMemo(() => {
    const data = response?.data || [];
    const chartData = [['Date', 'Score']];
    data.forEach((item: DateCompanyScore) => {
      chartData.push([item.date, item.score as any]);
    });
    return chartData;
  }, [response]);

  return (
    <div className="shadow-md p-4 min-h-[400px]">
      <LoadingIndicator loading={isLoading}>
        <div className="text-xl font-medium pb-2">Employee Rating</div>
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={chartData}
          options={{
            curveType: 'function',
            legend: false,
            hAxis: {
              title: 'Date',
            },
            vAxis: {
              title: 'Score',
            },
          }}
        />
      </LoadingIndicator>
    </div>
  );
};

export default CompanyPerformanceChart;
