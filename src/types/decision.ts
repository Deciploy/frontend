import { User } from './user';

export interface WorkTime {
  date: string;
  time: number;
}

export interface EmployeeWorkTime {
  employee: User;
  workTime: WorkTime[];
}

export interface AverageWorkTime {
  employee: User;
  averageWorkTime: number;
  status: 'Overtime' | 'Regular' | 'Underwork';
}
