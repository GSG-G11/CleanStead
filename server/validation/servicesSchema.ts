import {
  number, object, string,
} from 'yup';

const servicesSchema = object({
  name: string().required('Name is required'),
  description: string().required('Description is required'),
  price: number().min(1, 'Price must be large than 0').required('Price is required'),
  image: string().required('Image is required'),
  categoryId: number().min(1).positive().required('You must select a category'),
});

export default servicesSchema;
