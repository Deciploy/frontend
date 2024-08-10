import { NumberInput, TextInput } from '@components';
import { Weightage } from '@types';
import { FC, useState } from 'react';

interface WeightageInputProps {
  wightage: Weightage;
  onChange: (
    teamId: string,
    applicationTypeId: string,
    wightage: number
  ) => void;
}

const WeightageInput: FC<WeightageInputProps> = ({ wightage, onChange }) => {
  const [weightage, setWeightage] = useState(wightage.weightage);

  const onChangeWeightage = (value: string) => {
    setWeightage(parseInt(value));
    onChange(wightage.team.id, wightage.applicationType.id, parseInt(value));
  };

  return (
    <div className="grid grid-cols-5">
      <div className="col-start-2 col-span-2">
        {wightage.applicationType.name}
      </div>
      <NumberInput
        value={weightage}
        onChange={onChangeWeightage}
        maximum={10}
        minimum={0}
      />
    </div>
  );
};

export default WeightageInput;
