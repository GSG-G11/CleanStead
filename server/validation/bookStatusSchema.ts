import {
  object, string,
} from 'yup';

const bookStatusSchema = object({
  status: string().required('Status is required'),

});
export default bookStatusSchema;
