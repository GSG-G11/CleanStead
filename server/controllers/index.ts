import {
  serverError, clientError,
} from './errorHandle';
import {
  getCategories, getCategoryServices, postCategories, putCategories, archivedCategory,
} from './categories';
import {
  getContacts, addContact, deleteContact, updateContactStatus,
} from './contact';
import signup from './signup';
import { logout, logoutAdmin } from './logout';
import { checkAuth, checkAdmin } from './middlewares/auth';
import signin from './signin';
import { postService, archivedService, putService } from './services';
import {
  getBooks, getUserBooks, getBook, postBook, deleteBook, getStatus,
  getBookDay, getBookMonth, updateBook, updateStatusBook,
} from './book';
import { validateLink } from './middlewares';
import signinAdmin from './signinAdmin';

export {
  serverError,
  clientError,
  getCategories,
  getCategoryServices,
  getContacts,
  addContact,
  deleteContact,
  signup,
  logout,
  checkAuth,
  checkAdmin,
  signin,
  postCategories,
  getBooks,
  putCategories,
  postService,
  archivedCategory,
  putService,
  archivedService,
  getUserBooks,
  getBook,
  postBook,
  validateLink,
  signinAdmin,
  updateContactStatus,
  logoutAdmin,
  getStatus,
  deleteBook,
  getBookDay,
  getBookMonth,
  updateBook,
  updateStatusBook,
};
