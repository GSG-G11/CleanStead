import {
  object, string,
} from 'yup';

const signinSchema = object({
  email: string().email('Your email must be a valid email').required('Your email is required to login'),
  password: string().length(10, 'Your password must be 10 digits at least').required('Password is required to login'),
});

export default signinSchema;
