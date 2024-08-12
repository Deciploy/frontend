import { FC, useState } from 'react';
import Moment from 'react-moment';
import { useAuth } from 'src/app/providers';

const NowClockInCard: FC = () => {
  const { userData } = useAuth();
  const [time, setTime] = useState(new Date());

  setInterval(() => {
    setTime(new Date());
  }, 1000);

  return (
    <div className="shadow-md rounded-md p-4 bg-primary-100 border-l-4 border-primary-400 min-h-[150px]">
      <div className="text-xl font-medium pb-2">Hi, {userData?.fullName}</div>
      <div className="text-5xl font-medium">
        <Moment format="hh:mm:ss a">{time}</Moment>
      </div>
      <div className="">
        <Moment format="ddd, MMM yyyy">{time}</Moment>
      </div>
    </div>
  );
};

export default NowClockInCard;
