import { useFetchApplicationUsage } from '@api';
import { FC, useMemo } from 'react';
import { LoadingIndicator } from 'src/app/view/common';
import LinearIndicator from 'src/app/view/common/LinearIndicator';

const ApplicationUsageList: FC = () => {
  const { data: response, isLoading } = useFetchApplicationUsage();

  const totalUsage = useMemo(() => {
    return response?.data?.reduce((acc, usage) => acc + usage.usage, 0) || 0;
  }, [response]);

  return (
    <div className="flex flex-col shadow-md p-4 space-y-2">
      <div className="text-xl font-medium pb-2">Application usage</div>

      <LoadingIndicator loading={isLoading}>
        {response?.data?.map((usage, index) => (
          <div key={index} className="grid grid-cols-6">
            <img
              src={usage.application.logo}
              alt={usage.application.name}
              className="w-10"
            />
            <div className="col-span-2">{usage.application.name}</div>

            <LinearIndicator
              percentage={(usage.usage * 100) / totalUsage}
              color="primary"
              className="col-span-3"
            />
          </div>
        ))}
      </LoadingIndicator>
    </div>
  );
};

export default ApplicationUsageList;
