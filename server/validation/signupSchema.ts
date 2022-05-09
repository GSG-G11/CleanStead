import {
  object, string,
} from 'yup';

const signupSchema = object({
  name: string().required('Name is required'),
  email: string().email('Your email must be a valid email').required('Your email is required to rgister'),
  phone: string().length(10, 'your phone number must be 10 digits').required('Your phone number is required'),
  password: string().required('Password is required'),
  location: string().required('Your location is required'),
});

export default signupSchema;
