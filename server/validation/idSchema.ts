import {
  number, object,
} from 'yup';

const idSchema = object({
  id: number().min(1).required('Id must be a number larger than 0'),
});

export default idSchema;
