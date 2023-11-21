import { FC } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TextInput, Button, PasswordInput } from '@components';
import { LoginSchema } from '@deciploy/constants';
import { useRequest } from '@http-client';
import { useAuth } from '@user-auth';
import { Formik } from 'formik';
import { ErrorText } from '../../common/ErrorText';
import { AuthUserData, NetworkResponse, User } from '../../../../data';
import logo from 'src/assets/images/logo.png';

interface LoginValues {
  email: string;
  password: string;
}

const LoginPage: FC = () => {
  const { loading, error, post } = useRequest<NetworkResponse<AuthUserData>>();
  const { set } = useAuth<User>();

  const { state } = useLocation();
  const navigate = useNavigate();

  const initialValues: LoginValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async (values: LoginValues) => {
    const response = await post('auth/login', values);

    if (response?.data) {
      const { token, user } = response.data;
      set(token.token, user, { isRemembered: true });

      if (state && 'redirect' in state) {
        navigate(state.redirect);
      } else {
        navigate('/');
      }
    }
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-primary">
              Login in to Deciploy
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

                <PasswordInput
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

                <ErrorText error={error?.message} />

                <br />

                <Button
                  variant="rounded"
                  fullWidth
                  disabled={loading}
                  onClick={handleSubmit}
                  loading={loading}
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
