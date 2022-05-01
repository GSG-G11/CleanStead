import {
  number, object,
} from 'yup';

const categroyIdSchema = object({
  id: number().min(0).required('Category Id must be a number larger than 0'),
});

export default categroyIdSchema;
