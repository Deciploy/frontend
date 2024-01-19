import { Button, SelectInput } from '@components';
import React from 'react';

export default function ScreenshotPage() {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl ">
        Screenshot
      </h1>
      <div className="flex flex-col p-2">
        <div className="flex space-x-8">
          <div>
            <h1 className="font-bold">Team</h1>
            <SelectInput placeholder="Development" fullWidth />
          </div>
          <div>
            <h1 className="font-bold">User</h1>
            <SelectInput placeholder="Development" fullWidth />
          </div>
          <div>
            <h1 className="font-bold">From</h1>
            <SelectInput placeholder="Development" fullWidth />
          </div>
          <div>
            <h1 className="font-bold">To</h1>
            <SelectInput placeholder="Development" fullWidth />
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-3/5 p-4 ">
            <h1 className="text-2xl font-bold mb-4">Captured At:</h1>

            <div className="p-10"> This is screenshot space</div>

            <div className="p-4 flex space-x-4">
              <Button>Capture Now</Button>
              <Button variant="filled" color="warning">
                Delete
              </Button>
            </div>
          </div>

          <div className="w-full md:w-2/5 p-4 ">
            <h1 className="text-2xl font-bold mb-4">Timeline </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
