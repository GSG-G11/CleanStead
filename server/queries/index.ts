import {
  getCategoriesQuery, getCategoryServicesQuery, postCategoriesQuery, putCategoriesQuery,
} from './categories';
import { getContactsQuery, addContactQuery } from './contact';
import { addUserQuery, checkEmailExistsQuery, getUserInfoQuery } from './user';
import { getBooksQuery, getUserBooksQuery, getBookQuery } from './book';
import checkEmailAdminExistsQuery from './admin';
import { postServiceQuery, deleteServiceQuery, putServiceQuery } from './services';

export {
  getCategoriesQuery,
  getCategoryServicesQuery,
  getContactsQuery,
  addContactQuery,
  addUserQuery,
  checkEmailExistsQuery,
  getUserInfoQuery,
  postCategoriesQuery,
  getBooksQuery,
  postServiceQuery,
  putCategoriesQuery,
  putServiceQuery,
  deleteServiceQuery,
  getUserBooksQuery,
  getBookQuery,
  checkEmailAdminExistsQuery,
};
