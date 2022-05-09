import {
  object, string,
} from 'yup';

const signupSchema = object({
  name: string().required('Name is required'),
  email: string().email('Your email must be a valid email').required('Your email is required to rgister'),
  phone: string().min(10, 'Your phone number must be 10 digits at least').required('Your phone number is required'),
  password: string().min(6, 'Your password must be 6 digits at least').required('Password is required'),
  location: string().required('Your location is required'),
});

export default signupSchema;
