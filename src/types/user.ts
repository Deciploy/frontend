import { Company } from "./company";
import { Team } from "./team";

export interface UserRequest {
  fullName: string;
  email: string;
  roles: string[];
  teamId?: string;
}

export interface User {
  id: string;
  fullName: string;
  roles: string[];
  company?: Company;
  team?: Team;
  username: string;
}
