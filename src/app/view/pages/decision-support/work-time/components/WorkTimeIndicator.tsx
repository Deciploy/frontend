import { AverageWorkTime } from '@types';

interface WorkTimeIndicatorProps {
  employeeWorkTime: AverageWorkTime;
}

const WorkTimeIndicator: React.FC<WorkTimeIndicatorProps> = ({
  employeeWorkTime,
}) => {
  const statusColor = {
    Zero: 'bg-gray-100',
    Overtime: 'bg-blue-400',
    Regular: 'bg-green-400',
    Underwork: 'bg-red-400',
  };

  const percentage =
    100 % Math.ceil((employeeWorkTime.averageWorkTime * 100) / 8);

  return (
    <div className={`h-4 bg-gray-100 w-full text-white text-sm`}>
      <div
        className={`h-4 ${statusColor[employeeWorkTime.status]}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default WorkTimeIndicator;
