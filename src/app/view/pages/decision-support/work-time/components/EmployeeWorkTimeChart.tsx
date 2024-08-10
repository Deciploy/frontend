import { EmployeeWorkTime } from '@types';
import Chart from 'react-google-charts';

interface EmployeeWorkTimeChartProps {
  data?: EmployeeWorkTime;
}

const EmployeeWorkTimeChart: React.FC<EmployeeWorkTimeChartProps> = ({
  data,
}) => {
  const statusColor = {
    Overtime: 'bg-red-500',
    Regular: 'bg-green-500',
    Underwork: 'bg-blue-500',
  };
  const chartData = [
    ['Date', 'Work Time'],
    ...(data?.workTime.map((item) => [item.date, item.time]) || []),
  ];

  return (
    <div className="shadow-md p-4">
      <div className="p-4 text-xl font-bold">Employee Work Time</div>
      <Chart
        chartType="BarChart"
        width="100%"
        height="400px"
        data={chartData}
        options={{
          chartArea: { width: '50%' },
          hAxis: {
            title: 'Work Time',
            minValue: 0,
          },
          vAxis: {
            title: 'Date',
          },
        }}
      />
    </div>
  );
};

export default EmployeeWorkTimeChart;
