import {
  number, object, string,
} from 'yup';

const contactSchema = object({
  name: string().required('Name is required'),
  email: string().email('Your email must be a valid email').required('Your email is required to contact us'),
  message: string().required('Your message is required'),
  phone: number().min(10, 'Your phone number must be 10 digits at least').required('Your phone number is required'),
  categoryId: number().min(1).positive().required('You must select a category'),
});

export default contactSchema;
