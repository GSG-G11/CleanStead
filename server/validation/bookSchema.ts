import {
  object, string, number, array, boolean,
} from 'yup';

const bookSchema = object({
  dateTime: string().required('Date Time is required'),
  price: number().min(1, 'Price must be large than 0').required('Price is required'),
  repeat: string().oneOf(['مرة واحدة', 'يوميا', 'أسبوعيا', 'شهريا']).required('Repeat Time is required'),
  userId: number().min(1, 'Id must be a positive number').required('User Id is required'),
  services: array().of(
    object().shape({
      id: number().min(1, 'Id must be a positive number').required('Service Id is required'),
      name: string().required('name is required'),
      description: string().required('description is required'),
      price: number().required('price is required'),
      image: string().required('image is required'),
      category_id: number().required('price is required'),
      archived: boolean().required('archived is required'),
      quantity: number().min(1, 'Quantity must be a positive number').required('Quantity is required'),
      isChecked: boolean().required('isChecked is required'),
    }),
  )
    .required('You need to send the required services'),
  user: object().shape({
    name: string().required('Name Time is required'),
    phone: string().required('Phone Time is required'),
    location: string().required('Location Time is required'),
    lat: number(),
    lng: number(),
  }),
});

export default bookSchema;
