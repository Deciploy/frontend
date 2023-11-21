import { memo, useMemo } from 'react';

interface AvatarProps {
  photoUrl?: string;
  fullName?: string;
  size?: number;
}

const AvatarBase: React.FC<AvatarProps> = ({
  photoUrl,
  fullName,
  size = 8,
}) => {
  const color = useMemo(() => {
    if (!fullName) {
      return;
    }

    return Math.floor(
      Math.abs(
        Math.sin(
          fullName
            .split('')
            .map((char) => char.charCodeAt(0))
            .reduce((curr, prev) => prev + curr, 0)
        ) * 16777215
      ) % 16777215
    ).toString(16);
  }, [fullName]);

  if (photoUrl) {
    return (
      <img
        className={`w-${size} h-${size} rounded-full`}
        src={photoUrl}
        alt="user"
      />
    );
  }

  if (fullName) {
    return (
      <div
        className={`flex items-center justify-center w-${size} h-${size} rounded-full bg-${color}`}
      >
        <span className="text-white text-sm font-medium">
          {fullName.charAt(0).toUpperCase()}
        </span>
      </div>
    );
  }

  return (
    <img
      className={`w-${size} h-${size} rounded-full`}
      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
      alt="user"
    />
  );
};

export const Avatar = memo(AvatarBase);
