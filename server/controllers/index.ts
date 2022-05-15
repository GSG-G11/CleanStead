import {
  serverError, clientError,
} from './errorHandle';
import { getCategories, getCategoryServices } from './categories';
import { getContacts, addContact } from './contact';
import signup from './signup';
import logout from './logout';
import checkAuth from './middlewares/auth';
import signin from './signin';
import { getBooks, getUserBooks, getBook } from './book';
import { postService, putService } from './services';
import { validateLink } from './middlewares';

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
  getBooks,
  postService,
  putService,
  getUserBooks,
  getBook,
  validateLink,
};
