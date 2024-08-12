import { DateCompanyScore, TodayPerformance } from '@types';

export const getTodayPerformance = (data: Array<DateCompanyScore>) => {
  const today = new Date().toISOString().split('T')[0];
  const todayPerformance = data.find((item) => item.date === today);
  const score = todayPerformance?.score || 0;

  const totalScore = data.reduce((acc, item) => acc + item.score, 0);

  const avgScore = totalScore / data.length;

  const performanceIncrease = ((score - avgScore) / avgScore) * 100;

  return {
    score,
    performanceIncrease,
  } as TodayPerformance;
};
