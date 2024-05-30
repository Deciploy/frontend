import { useScreenshotFetch } from '@api';
import { Button, DateTimeInput, SelectInput, TextInput } from '@components';
import { Screenshot } from '@types';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';

import { TeamSelector, UserSelector } from '../../common';
import ScreenshotItem from './components/ScreenshotItem';

export default function ScreenshotPage() {
  const [teamId, setTeamId] = useState<string | undefined>(undefined);
  const [userId, setUserId] = useState<string | undefined>(undefined);
  const [selectedScreenshot, setSelectedScreenshot] =
    useState<Screenshot | null>(null);

  const { isLoading, data, refetch } = useScreenshotFetch(
    '0e7792fd-3f0e-42bb-a1f9-b956bfc1419c'
  );

  useEffect(() => {
    if (data?.data?.length) {
      setSelectedScreenshot(data.data[0]);
    }
  }, [data]);

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
          onChange={setUserId}
        />

        <DateTimeInput
          className="w-1/4"
          placeholder="From"
          onChange={(value) => console.log(value)}
        />

        <DateTimeInput
          className="w-1/4"
          placeholder="From"
          onChange={(value) => console.log(value)}
        />
      </div>

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
          {data?.data?.map((screenshot) => (
            <ScreenshotItem
              key={screenshot.id}
              screenshot={screenshot}
              selected={screenshot.id === selectedScreenshot?.id}
              onSelect={(screenshot) => setSelectedScreenshot(screenshot)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
