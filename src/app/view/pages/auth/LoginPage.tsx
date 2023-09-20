import { FC } from 'react';
import { TextInput,Button } from '@components'

const LoginPage: FC = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
      <div className='bg-primary flex flex-col justify-center items-center h-screen'>
      <h1 style={{ fontSize: '3rem', fontWeight: '700', color:'#2F203F' }}>Hi</h1>
      <p style={{ fontSize: '2rem' }}>Welcome Back</p>
      </div >
      
      <div className='col-span-2 bg-secondary p-4'>
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold ">Sign in to Deciploy</h2>
      </div>  
    </div>
  );
};

export default LoginPage;
