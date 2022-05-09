import {
  object, string,
} from 'yup';

const signinSchema = object({
  email: string().email('Your email must be a valid email').required('Your email is required to login'),
  password: string().min(6, 'Your password must be 6 digits at least').required('Password is required to login'),
});

export default signinSchema;
