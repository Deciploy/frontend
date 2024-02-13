import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('The email is required'),
  password: Yup.string().required('The password is required'),
});

export const TeamSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
});