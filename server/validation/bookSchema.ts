import {
  object, string, number,
} from 'yup';

const categoriesSchema = object({
  dateTime: string().required('Date Time is required'),
  creationTime: string().required('Creation Time is required'),
  price: number().min(1, 'Price must be large than 0').required('Price is required'),
  repeat: string().required('Repeat Time is required'),
  userId: number().min(1, 'Id must be a positive number').required('User Id is required'),
  quantity: number().min(1, 'Quantity must be a positive number').required('Quantity is required'),
  serviceId: number().min(1, 'Id must be a positive number').required('Service Id is required'),
});

export default categoriesSchema;
