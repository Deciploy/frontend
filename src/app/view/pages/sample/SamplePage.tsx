import { useRequest } from '@http-client';
import { FC, useEffect } from 'react';

const SamplePage: FC = () => {
  const { get } = useRequest();

  useEffect(() => {
    get('company').then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div>
      <h1>Sample Page</h1>
    </div>
  );
};

export default SamplePage;
