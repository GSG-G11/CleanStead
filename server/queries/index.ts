import {
  getCategoriesQuery,
  getCategoryServicesQuery, postCategoriesQuery, putCategoriesQuery, archivedCategoriesQuery,
} from './categories';
import { getContactsQuery, addContactQuery } from './contact';
import { addUserQuery, checkEmailExistsQuery } from './user';
import {
  getBooksQuery, getUserBooksQuery, getBookQuery,
  postBookQuery, postServiceBookQuery, deleteBookQuery, getStatusQuery,
} from './book';
import checkEmailAdminExistsQuery from './admin';
import { postServiceQuery, archivedServiceQuery, putServiceQuery } from './services';

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
  archivedCategoriesQuery,
  putCategoriesQuery,
  putServiceQuery,
  archivedServiceQuery,
  getUserBooksQuery,
  getBookQuery,
  postBookQuery,
  postServiceBookQuery,
  checkEmailAdminExistsQuery,
  getStatusQuery,
  deleteBookQuery,
};
