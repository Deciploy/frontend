import { useScreenshotFetch } from '@api';
import { Button, CircleSpinner, DateTimeInput } from '@components';
import { Screenshot } from '@types';
import { useEffect, useMemo, useState } from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';
import Moment from 'react-moment';

import { TeamSelector, UserSelector } from '../../common';
import ScreenshotItem from './components/ScreenshotItem';

export default function ScreenshotPage() {
  const [teamId, setTeamId] = useState<string | undefined>(undefined);
  const [userId, setUserId] = useState<string | undefined>(undefined);
  const [from, setFrom] = useState<string | undefined>(undefined);
  const [to, setTo] = useState<string | undefined>(undefined);
  const [selectedScreenshot, setSelectedScreenshot] =
    useState<Screenshot | null>(null);

  const url = useMemo(() => {
    let url = `${userId}`;

    const params = new URLSearchParams();
    if (from) params.append('from', new Date(from).toString());
    if (to) params.append('to', new Date(to).toString());

    return url + '?' + params.toString();
  }, [teamId, userId, from, to]);

  const { isLoading, data: response } = useScreenshotFetch(url);

  useEffect(() => {
    if (response?.data?.length) {
      setSelectedScreenshot(response.data[0]);
    }
  }, [response]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl">Screenshot</h1>

      <div className="flex gap-3 w-3/4">
        <TeamSelector
          className="w-1/4"
          placeholder="Team"
          onChange={setTeamId}
        />

        <UserSelector
          className="w-1/4"
          placeholder="User"
          teamId={teamId}
          onChange={setUserId}
        />

        <DateTimeInput
          className="w-1/4"
          placeholder="From"
          datetimeType="datetime-local"
          onChange={setFrom}
        />

        <DateTimeInput
          className="w-1/4"
          placeholder="From"
          datetimeType="datetime-local"
          onChange={setTo}
        />
      </div>
      {isLoading && (
        <div className="flex grow flex-col items-center justify-center mt-48 h-[50vh]">
          <CircleSpinner size={48} circleClassName="text-primary" />
        </div>
      )}

      {!isLoading &&
        (response?.data?.length !== 0 ? (
          <div className="flex">
            <div className="w-full md:w-3/5 p-4 ">
              <div className="text-xl  mb-4">
                Captured At:{' '}
                <Moment format="dddd, D MMMM YYYY, MMM hh:mm:ss a">
                  {selectedScreenshot?.capturedAt}
                </Moment>
              </div>

              <div className="p-6 ">
                <img src={selectedScreenshot?.url} className="mb-4 max-w-lg" />
              </div>

              <div className="p-4 flex space-x-4">
                <Button>Capture Now</Button>
                <Button variant="filled" color="warning">
                  Delete
                </Button>
              </div>
            </div>

            <div className="w-2/5 max-h-[70vh] overflow-auto">
              <div className="text-xl mb-4">Timeline</div>
              {response?.data?.map((screenshot) => (
                <ScreenshotItem
                  key={screenshot.id}
                  screenshot={screenshot}
                  selected={screenshot.id === selectedScreenshot?.id}
                  onSelect={(screenshot) => setSelectedScreenshot(screenshot)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex grow flex-col items-center justify-center mt-48 h-[50vh]">
            <RiErrorWarningLine size={48} className="text-gray-500" />
            <p className="mt-4 text-center text-gray-500">
              No screenshots found
            </p>
          </div>
        ))}
    </div>
  );
}
