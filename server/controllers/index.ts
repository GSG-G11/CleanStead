import {
  serverError, clientError,
} from './errorHandle';
import { getCategories, getCategoryServices } from './categories';
import { getContacts, addContact } from './contact';
import signup from './signup';
import logout from './logout';
import checkAuth from './middlewares/auth';

export {
  serverError, clientError, getCategories, getCategoryServices, getContacts, addContact, signup,logout,checkAuth,
};
