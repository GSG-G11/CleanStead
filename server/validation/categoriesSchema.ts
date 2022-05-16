import {
  object, string,
} from 'yup';

const categoriesSchema = object({
  name: string().required('Name is required'),
  description: string().required('Description is required'),
  image: string().required('Image is required'),
});

export default categoriesSchema;
