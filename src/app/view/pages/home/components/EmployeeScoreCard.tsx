import { EmployeeScore } from '@types';
import { FC } from 'react';

interface EmployeeScoreCardProps {
  data: Array<EmployeeScore>;
}
const EmployeeScoreCard: FC<EmployeeScoreCardProps> = ({ data }) => {
  return (
    <div className="shadow-md rounded-md p-2">
      <div className="text-xl font-medium pb-2">Employee Rating</div>

      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Rank</th>
            <th className="text-left">Employee</th>
            <th className="text-left">Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.user.fullName}</td>
              <td>{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeScoreCard;
