import { AverageWorkTime, EmployeeWorkTime, WorkTime } from '@types';
import { FC } from 'react';
import Chart from 'react-google-charts';

interface TotalEmployeeWorkTimeChartProps {
  data: Array<AverageWorkTime>;
}

const TotalEmployeeWorkTimeChart: FC<TotalEmployeeWorkTimeChartProps> = ({
  data,
}) => {
  const chartData = [
    ['Work Time', 'Total Employees'],
    ['Overtime', data.filter((item) => item.status === 'Overtime').length],
    ['Regular', data.filter((item) => item.status === 'Regular').length],
    [
      'Underwork',
      data.filter((item) => ['Underwork', 'Zero'].includes(item.status)).length,
    ],
  ];

  return (
    <div className="p-4 shadow-md">
      <div className="text-xl font-medium mb-2">Total Employee Work Time</div>
      <Chart
        chartType="PieChart"
        data={chartData}
        options={{
          colors: ['#60a5fa', '#4ade80', '#f87171'],
        }}
        width={'100%'}
        height={'400px'}
      />
    </div>
  );
};

export default TotalEmployeeWorkTimeChart;
