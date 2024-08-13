import { FC } from 'react';

interface UserRolesBadgesProps {
  roles: string[];
}

export const UserRolesBadges: FC<UserRolesBadgesProps> = ({ roles }) => {
  return (
    <div className="flex">
      {roles.map((role) => (
        <span
          key={role}
          className="bg-primary-100 text-primary-500 rounded-full px-2 py-1 text-xs mr-2"
        >
          {role}
        </span>
      ))}
    </div>
  );
};
