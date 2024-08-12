import { Team } from './team';
import { User } from './user';

export interface EmployeeScore {
  user: User;
  score: number;
}

export interface TeamScore {
  team: Team;
  score: number;
}

export interface DateCompanyScore {
  date: string;
  score: number;
}

export interface TodayPerformance {
  score: number;
  performanceIncrease: number;
}
