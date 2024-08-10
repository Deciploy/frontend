import { WorkTime } from '@types';

export const getEmployeeAverageWorkTime = (workTimes: Array<WorkTime>) => {
  if (workTimes.length === 0) {
    return 0;
  }

  return workTimes.reduce((a, b) => a + b.time, 0) / (3600 * workTimes.length);
};

export const getEmployeeWorkStatus = (averageWorkTime: number) => {
  if (averageWorkTime > 8) {
    return 'Overtime';
  } else if (averageWorkTime === 8) {
    return 'Regular';
  } else if (averageWorkTime === 0) {
    return 'Zero';
  } else {
    return 'Underwork';
  }
};
