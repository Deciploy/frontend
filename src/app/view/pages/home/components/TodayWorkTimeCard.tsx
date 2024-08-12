import { FC } from 'react';

const TodayWorkTimeCard: FC = () => {
  return (
    <div className="shadow-md rounded-md p-4 bg-warning-100 border-l-4 border-warning-400 min-h-[150px]">
      <div className="text-xl font-medium pb-2">Today Work Time</div>
      <div className="flex justify-evenly">
        <div className="flex flex-col items-center">
          <div className="text-5xl font-medium">10</div>
          <div className="">Under time work</div>
        </div>
        <div className="text-5xl font-medium">/</div>
        <div className="flex flex-col items-center">
          <div className="text-5xl font-medium">20</div>
          <div className="">Over time work</div>
        </div>
      </div>
    </div>
  );
};

export default TodayWorkTimeCard;
