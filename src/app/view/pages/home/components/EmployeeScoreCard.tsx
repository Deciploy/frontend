import { useEmployeeScoreDataFetch } from '@api';
import { FC } from 'react';
import DataRendingView from 'src/app/view/common/DataRenderingView';

const EmployeeScoreCard: FC = () => {
  const { data: response, isLoading } = useEmployeeScoreDataFetch('');
  return (
    <div className="shadow-md rounded-md p-2">
      <div className="text-xl font-medium pb-2">Employee Rating</div>
      <DataRendingView
        data={response?.data}
        loading={isLoading}
        render={(data) => (
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
        )}
      />
    </div>
  );
};

export default EmployeeScoreCard;
