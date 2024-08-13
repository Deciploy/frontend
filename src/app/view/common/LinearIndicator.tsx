interface LinearIndicatorProps {
  className?: string;
  percentage: number;
  color?: 'primary' | 'secondary' | 'success' | 'warning';
}

const LinearIndicator: React.FC<LinearIndicatorProps> = ({
  percentage,
  color = 'primary',
  className,
}) => {
  return (
    <div className={`h-4 bg-gray-100 w-full text-white text-sm ${className}`}>
      <div
        className={`h-4 bg-${color}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default LinearIndicator;
