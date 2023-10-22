import { FC } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TextInput, Button } from '@components';
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
  const { set, isAuthenticated } = useAuth<User>();

  const { state } = useLocation();
  const navigation = useNavigate();

  const initialValues: LoginValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async (values: LoginValues) => {
    const response = await post('auth/login', values);

    if (response?.data) {
      const { token, user } = response.data;
      set(token.token, new Date(token.expiration), user);
      navigation(state?.redirect ? state.from : '/');
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="col-span-1 md:col-span-1 bg-primary flex flex-col justify-center items-center h-screen">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
          Hi
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Welcome Back {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}
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

                <ErrorText error={error?.message} />

                <br />

                <Button
                  variant="rounded"
                  fullWidth
                  disabled={loading}
                  onClick={handleSubmit}
                >
                  {loading ? 'Login....' : 'Sign In'}
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
