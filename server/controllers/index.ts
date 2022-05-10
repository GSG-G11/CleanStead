import {
  serverError, clientError,
} from './errorHandle';
import { getCategories, getCategoryServices } from './categories';
import { getContacts, addContact } from './contact';
import signup from './signup';
import signin from './signin';
import { postService } from './services';

export {
  serverError,
  clientError,
  getCategories,
  getCategoryServices,
  getContacts, addContact,
  signup,
  signin,
  postService,
};
