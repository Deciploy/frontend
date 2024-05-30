import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('The email is required'),
  password: Yup.string().required('The password is required'),
});

export const TeamSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
});

export const UserSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('The email is required'),
  role: Yup.string().required('role is required'),
  team: Yup.string().required('team is required'),
});