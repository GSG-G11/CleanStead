import {
  number, object,
} from 'yup';

const paramsIdSchema = object({
  params: object({
    id: number().required('Id is requried and must be number'),
  }),
});

export default paramsIdSchema;
