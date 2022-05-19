import {
  getCategoriesQuery, getCategoryServicesQuery, postCategoriesQuery, putCategoriesQuery,
} from './categories';
import { getContactsQuery, addContactQuery } from './contact';
import { addUserQuery, checkEmailExistsQuery } from './user';
import {
  getBooksQuery,
  getUserBooksQuery,
  getBookQuery,
  postBookQuery,
  postServiceBookQuery,
  getStatusQuery,
} from './book';
import checkEmailAdminExistsQuery from './admin';
import { postServiceQuery, deleteServiceQuery, putServiceQuery } from './services';

export {
  getCategoriesQuery,
  getCategoryServicesQuery,
  getContactsQuery,
  addContactQuery,
  addUserQuery,
  checkEmailExistsQuery,
  postCategoriesQuery,
  getBooksQuery,
  postServiceQuery,
  putCategoriesQuery,
  putServiceQuery,
  deleteServiceQuery,
  getUserBooksQuery,
  getBookQuery,
  postBookQuery,
  postServiceBookQuery,
  checkEmailAdminExistsQuery,
  getStatusQuery,
};
