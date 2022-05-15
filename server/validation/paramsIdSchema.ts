import {
  number, object,
} from 'yup';

const paramsIdSchema = object({
  params: object({
    id: number().min(1, 'Id must be a positive number').required('Id is requried and must be a number'),
  }),
});

export default paramsIdSchema;
