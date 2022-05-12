import {
  serverError, clientError,
} from './errorHandle';
import { getCategories, getCategoryServices, postCategories } from './categories';
import { getContacts, addContact } from './contact';
import signup from './signup';
import logout from './logout';
import checkAuth from './middlewares/auth';
import signin from './signin';
import { getBooks } from './book';
import { postService } from './services';

export {
  serverError,
  clientError,
  getCategories,
  getCategoryServices,
  getContacts,
  addContact,
  signup,
  logout,
  checkAuth,
  signin,
  postCategories,
  getBooks,
  postService,
};
