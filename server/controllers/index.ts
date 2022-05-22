import {
  serverError, clientError,
} from './errorHandle';
import {
  getCategories, getCategoryServices, postCategories, putCategories,
} from './categories';
import { getContacts, addContact } from './contact';
import signup from './signup';
import { logout, logoutAdmin } from './logout';
import { checkAuth, checkAdmin } from './middlewares/auth';
import signin from './signin';
import {
  getBooks, getUserBooks, getBook, postBook, deleteBook,
} from './book';
import { postService, deleteService, putService } from './services';
import { validateLink } from './middlewares';
import signinAdmin from './signinAdmin';

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
  checkAdmin,
  signin,
  postCategories,
  getBooks,
  putCategories,
  postService,
  putService,
  deleteService,
  getUserBooks,
  getBook,
  postBook,
  validateLink,
  signinAdmin,
  logoutAdmin,
  deleteBook,
};
