import { useScreenshotFetch } from '@api';
import { Button, DateTimeInput } from '@components';
import { useParamsQuery } from '@hooks';
import { Screenshot } from '@types';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';

import { TeamSelector, UserSelector } from '../../common';
import DataRendingView from '../../common/DataRenderingView';
import ScreenshotItem from './components/ScreenshotItem';

export default function ScreenshotPage() {
  const { setParams, getParams, query } = useParamsQuery();

  const [selectedScreenshot, setSelectedScreenshot] =
    useState<Screenshot | null>(null);

  const { isLoading, data: response, error } = useScreenshotFetch(query);

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
          value={getParams('team')}
          className="w-1/4"
          placeholder="Team"
          onChange={(value) => setParams('team', value)}
        />

        <UserSelector
          value={getParams('user')}
          className="w-1/4"
          placeholder="User"
          teamId={getParams('team')}
          onChange={(value) => setParams('user', value)}
        />

        <DateTimeInput
          value={getParams('from')}
          className="w-1/4"
          placeholder="From"
          datetimeType="datetime-local"
          onChange={(value) => setParams('from', value)}
        />

        <DateTimeInput
          value={getParams('to')}
          className="w-1/4"
          placeholder="From"
          datetimeType="datetime-local"
          onChange={(value) => setParams('to', value)}
        />
      </div>

      <DataRendingView
        loading={isLoading}
        error={error?.message}
        data={response}
        render={(response) => (
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
        )}
      />
    </div>
  );
}
