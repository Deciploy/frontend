import { DateCompanyScore } from '@types';
import { FC } from 'react';
import Chart from 'react-google-charts';

interface CompanyPerformanceProps {
  data: Array<DateCompanyScore>;
}
const CompanyPerformanceChart: FC<CompanyPerformanceProps> = ({ data }) => {
  const chartData = [
    ['Date', 'Score'],
    ...data.map((item) => [item.date, item.score]),
  ];

  return (
    <div>
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
    </div>
  );
};

export default CompanyPerformanceChart;
