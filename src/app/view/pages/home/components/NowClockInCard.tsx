import { FC, useState } from 'react';
import Moment from 'react-moment';
import { useAuth } from 'src/app/providers';

const NowClockInCard: FC = () => {
  const { userData } = useAuth();

  return (
    <div className="shadow-md rounded-md p-4 bg-primary-100 border-l-4 border-primary-400 min-h-[150px]">
      <div className="text-xl font-medium pb-2">Hi, {userData?.fullName}</div>
      <div className="text-4xl font-medium">
        <Moment format="hh:mm A">{new Date()}</Moment>
      </div>
      <div className="">
        <Moment format="ddd, MMM yyyy">{new Date()}</Moment>
      </div>
    </div>
  );
};

export default NowClockInCard;
