import {
  number, object,
} from 'yup';

const paramsIdSchema = object({
  params: object({
    id: number().required(),
  }),
});

export default paramsIdSchema;
