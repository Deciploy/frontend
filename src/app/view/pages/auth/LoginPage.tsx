import { FC } from 'react';
import { TextInput, Button } from '@components';
import { Link } from 'react-router-dom';
import logo from 'src/assets/images/logo.png';
import { Formik } from 'formik';
import { LoginSchema } from '@deciploy/constants';
import { on } from 'events';

interface LoginValues {
  email: string;
  password: string;
}

const LoginPage: FC = () => {
  const initialValues: LoginValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values: LoginValues) => {
    console.log(values);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="col-span-1 md:col-span-1 bg-primary flex flex-col justify-center items-center h-screen">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
          Hi
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Welcome Back
        </p>
      </div>

      <div className="col-span-2 md:col-span-2 p-4 flex justify-center items-center h-screen ">
        <div className="grid grid-cols-1 gap-4 max-w-screen-sm w-full justify-center items-center">
          <div className="flex justify-center items-center mb-20">
            <img src={logo} className="h-10 mr-4" alt="App Logo" />
          </div>
          <div className="flex justify-center items-center mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-primary">
              Sign in to Deciploy
            </h2>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={handleSubmit}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <div className="max-w-md w-full mx-auto space-y-5">
                  <TextInput
                    placeholder="User Name"
                    fullWidth
                    onChange={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    isError={!!errors.email}
                    message={errors.email}
                  />

                  <TextInput
                    placeholder="Password"
                    fullWidth
                    onChange={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    isError={!!errors.password}
                    message={errors.password}
                  />

                  <div className="flex justify-between items-center ">
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <p className="text-gray-700">Remember me</p>
                    </div>
                    <Link to="#" className="text-primary hover:underline">
                      Forgot Password?
                    </Link>
                  </div>
                  <br />
                </div>

                <div className="max-w-sm w-full mx-auto mt-10">
                  <Button variant="rounded" fullWidth onClick={handleSubmit}>
                    Sign In
                  </Button>
                </div>
              </>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
