import {
  number, object,
} from 'yup';

const categroyIdSchema = object({
  id: number().min(1).required('Category Id must be a number larger than 0'),
});

export default categroyIdSchema;
