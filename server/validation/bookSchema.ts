import {
  object, string, number, array,
} from 'yup';

const bookSchema = object({
  dateTime: string().required('Date Time is required'),
  price: number().min(1, 'Price must be large than 0').required('Price is required'),
  repeat: string().oneOf(['مرة واحدة', 'أسبوعيا', 'شهريا']).required('Repeat Time is required'),
  userId: number().min(1, 'Id must be a positive number').required('User Id is required'),
  services: array().of(
    object().shape({
      quantity: number().min(1, 'Quantity must be a positive number').required('Quantity is required'),
      serviceId: number().min(1, 'Id must be a positive number').required('Service Id is required'),
    }),
  )
    .required('You need to send the required services'),
});

export default bookSchema;
