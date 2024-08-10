import { Button } from '@components';
import { TeamWeightageSavePayload } from '@types';
import { FC, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  useFetchApplicationWeightages,
  useSaveWeightage,
} from 'src/api/application';
import DataRenderingView from 'src/app/view/common/DataRenderingView';

import WeightageInput from './components/WeightageInput';

const WeightagePage: FC = () => {
  const {
    isLoading,
    data: response,
    refetch,
  } = useFetchApplicationWeightages();

  const { mutate: save, isPending, isSuccess } = useSaveWeightage();

  const [teamWithWeightageSavePayload, setTeamWithWeightageSavePayload] =
    useState<Array<TeamWeightageSavePayload>>([]);

  const onChangeWeightageHandler = (
    teamId: string,
    applicationTypeId: string,
    weightage: number
  ) => {
    const index = teamWithWeightageSavePayload.findIndex(
      (item) =>
        item.teamId === teamId && item.applicationTypeId === applicationTypeId
    );

    if (index === -1) {
      setTeamWithWeightageSavePayload([
        ...teamWithWeightageSavePayload,
        { teamId, applicationTypeId, weightage },
      ]);
    } else {
      setTeamWithWeightageSavePayload([
        ...teamWithWeightageSavePayload.slice(0, index),
        { teamId, applicationTypeId, weightage },
        ...teamWithWeightageSavePayload.slice(index + 1),
      ]);
    }
  };

  const saveHandler = () => {
    save(teamWithWeightageSavePayload);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Weightage saved successfully');
      refetch();
      setTeamWithWeightageSavePayload([]);
    }
  }, [isSuccess]);

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl pb-2">Application Weightage</h1>

      <DataRenderingView
        loading={isLoading}
        data={response?.data}
        render={(data) => (
          <div className="flex flex-col divide-y space-y-2">
            {data.map((item) => (
              <div>
                <div className="text-xl font-semibold">{item.team.name}</div>

                <div className="grid grid-cols-2 gap-2">
                  {item.weightages.map((weightage) => (
                    <WeightageInput
                      wightage={weightage}
                      onChange={onChangeWeightageHandler}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      />

      <div className="flex space-x-2 self-end">
        <Button
          disabled={!teamWithWeightageSavePayload.length}
          loading={isPending}
          onClick={saveHandler}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default WeightagePage;
