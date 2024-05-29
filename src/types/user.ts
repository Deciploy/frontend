import { Company } from "./company";
import { Team } from "./team";

export interface User {
  id: string;
  fullName: string;
  roles: string[];
  company?: Company;
  team?: Team;
  username: string;
}
