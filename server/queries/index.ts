import {
  getCategoriesQuery,
  getCategoryServicesQuery, postCategoriesQuery, putCategoriesQuery, archivedCategoriesQuery,
} from './categories';
import { getContactsQuery, addContactQuery } from './contact';
import { addUserQuery, checkEmailExistsQuery } from './user';
import {
  getBooksQuery, getUserBooksQuery, getBookQuery,
  postBookQuery, postServiceBookQuery, deleteBookQuery,
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
  archivedCategoriesQuery,
  putCategoriesQuery,
  putServiceQuery,
  deleteServiceQuery,
  getUserBooksQuery,
  getBookQuery,
  postBookQuery,
  postServiceBookQuery,
  checkEmailAdminExistsQuery,
  deleteBookQuery,
};
