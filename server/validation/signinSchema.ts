import {
  object, string,
} from 'yup';

const signinSchema = object({
  email: string().email('Your email must be a valid email').required('Your email is required to login'),
  password: string().min(8, 'Your password must be 8 digits at least').required('Password is required to login'),
});

export default signinSchema;
