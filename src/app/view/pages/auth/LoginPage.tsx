import { Button, PasswordInput, TextInput } from '@components';
import { LoginSchema } from '@deciploy/constants';
import { Formik } from 'formik';
import { FC } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from 'src/app/providers';
import { usePost } from 'src/app/utils/hooks';
import logo from 'src/assets/images/logo.png';

import { AuthUserData, NetworkResponse } from '../../../../data';
import { AlertMessage } from '../../common/AlertMessage';

interface LoginValues {
  email: string;
  password: string;
  isRemember: boolean;
}

const LoginPage: FC = () => {
  const { mutateAsync, error, isPending } =
    usePost<NetworkResponse<AuthUserData>>('auth/login');
  const { login } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();

  const initialValues: LoginValues = {
    email: '',
    password: '',
    isRemember: false,
  };

  const handleSubmit = async (values: LoginValues) => {
    mutateAsync({ email: values.email, password: values.password }).then(
      (res) => {
        const tokenData = res.data?.token;
        const token = tokenData?.token!;
        const user = res.data?.user;
        const expireAt = new Date(tokenData?.expiration!).getTime();

        login(token, expireAt, user);

        if (state && 'redirect' in state) {
          navigate(state.redirect);
        } else {
          navigate('/');
        }
      }
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="col-span-1 md:col-span-1 bg-primary flex flex-col justify-center items-center h-screen">
        <h1 className="text-6xl text-white">Hi</h1>
        <p className="text-3xl text-white">Welcome Back</p>
      </div>

      <div className="col-span-2 md:col-span-2 p-4 flex justify-center items-center h-screen">
        <div className="flex flex-col gap-10">
          <div className="flex justify-center items-center">
            <img src={logo} className="h-10 mr-4" alt="App Logo" />
          </div>
          <div className="flex justify-center items-center">
            <p className="text-5xl text-primary">Login in to Deciploy</p>
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
              <div className="max-w-md w-full mx-auto space-y-5">
                <AlertMessage message={error?.message} type="error" />

                <TextInput
                  placeholder="User Name"
                  onChange={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  isError={!!errors.email}
                  message={errors.email}
                />

                <PasswordInput
                  placeholder="Password"
                  onChange={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  isError={!!errors.password}
                  message={errors.password}
                />

                <div className="flex justify-between items-center ">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      onChange={handleChange('isRemember')}
                    />
                    <p className="text-gray-700">Remember me</p>
                  </div>
                  <Link to="#" className="text-primary hover:underline">
                    Forgot Password?
                  </Link>
                </div>

                <br />

                <Button
                  fullWidth
                  disabled={isPending}
                  onClick={handleSubmit}
                  loading={isPending}
                  loadingText="Logging in..."
                >
                  LOGIN
                </Button>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
