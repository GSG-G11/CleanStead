import {
  object, string, number,
} from 'yup';

const bookSchema = object({
  dateTime: string().required('Date Time is required'),
  repeat: string().oneOf(['مرة واحدة', 'يوميا', 'أسبوعيا', 'شهريا']).required('Repeat Time is required'),
  user: object().shape({
    name: string().required('Name is required'),
    phone: string().required('Phone is required'),
    location: string().required('Location Time is required'),
    lat: number(),
    lng: number(),
  }),
});

export default bookSchema;
