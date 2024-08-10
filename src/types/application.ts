import { ApplicationType, Team } from '@types';

export interface Weightage {
  id: string;
  applicationType: ApplicationType;
  team: Team;
  weightage: number;
}

export interface TeamWeightage {
  team: Team;
  weightages: Array<Weightage>;
}

export interface TeamWeightageSavePayload {
  teamId: string;
  applicationTypeId: string;
  weightage: number;
}
