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
        <div className="text-xl font-medium pb-2">Company Performance</div>
        <Chart
          chartType="ComboChart"
          width="100%"
          height="400px"
          data={chartData}
          options={{
            curveType: 'function',
            seriesType: 'bars',
            series: { 4: { type: 'line' } },
            legend: false,
            hAxis: {
              title: 'Date',
            },
            vAxis: {
              title: 'Score',
            },
            animation: {
              startup: true,
              easing: 'linear',
              duration: 1500,
            },
          }}
        />
      </LoadingIndicator>
    </div>
  );
};

export default CompanyPerformanceChart;
