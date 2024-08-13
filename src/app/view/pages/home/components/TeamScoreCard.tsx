import { TeamScore } from '@types';
import { FC } from 'react';

interface TeamScoreCardProps {
  data: Array<TeamScore>;
}

const TeamScoreCard: FC<TeamScoreCardProps> = ({ data }) => {
  return (
    <div className="shadow-md rounded-md p-2">
      <div className="text-xl font-medium pb-2">Team Rating</div>

      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Rank</th>
            <th className="text-left">Team</th>
            <th className="text-left">Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.team.name}</td>
              <td>{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamScoreCard;
