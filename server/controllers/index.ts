import {
  serverError, clientError,
} from './errorHandle';
import {
  getCategories, getCategoryServices, postCategories, putCategories, deleteCategory,
} from './categories';
import { getContacts, addContact } from './contact';
import signup from './signup';
import logout from './logout';
import { checkAuth } from './middlewares/auth';
import signin from './signin';
import { getBooks, getUserBooks, getBook } from './book';
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
  signin,
  postCategories,
  getBooks,
  putCategories,
  postService,
  deleteCategory,
  putService,
  deleteService,
  getUserBooks,
  getBook,
  validateLink,
  signinAdmin,
};
