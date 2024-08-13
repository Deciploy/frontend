import { Screenshot } from '@types';
import { AiOutlineClockCircle } from 'react-icons/ai';
import Moment from 'react-moment';

interface ScreenshotItemProps {
  screenshot: Screenshot;
  selected: boolean;
  onSelect?: (screenshot: Screenshot) => void;
}

const ScreenshotItem: React.FC<ScreenshotItemProps> = ({
  screenshot,
  selected,
  onSelect,
}) => {
  return (
    <div
      className="hover:bg-primary-100 cursor-pointer"
      onClick={() => onSelect && onSelect(screenshot)}
    >
      <div
        className={`flex items-center p-3 ${selected ? 'text-primary' : ''}`}
      >
        <AiOutlineClockCircle size={30} className="mr-2" />
        <h3>
          <Moment fromNow>{screenshot.capturedAt}</Moment>
        </h3>
      </div>
      <div
        className={`p-10 border-l ml-6 ${
          selected ? 'border-primary-500 ' : 'border-gray-500'
        }`}
      >
        <img
          src={screenshot.url}
          className={`mb-4 max-w-xs ${
            selected ? 'border-4 border-primary-500 ' : ''
          }`}
        />
      </div>
    </div>
  );
};

export default ScreenshotItem;
