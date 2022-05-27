import {
  getCategoriesQuery,
  getCategoryServicesQuery, postCategoriesQuery, putCategoriesQuery, archivedCategoriesQuery,
} from './categories';
import {
  getContactsQuery, addContactQuery, deleteContactQuery, updateContactStatusQuery,
} from './contact';
import { addUserQuery, checkEmailExistsQuery, getEmailQuery } from './user';
import {
  getBooksQuery, getUserBooksQuery, getBookQuery,
  postBookQuery, postServiceBookQuery, deleteBookQuery, getStatusQuery,
  getBookDayQuery, getBookMonthQuery, updateBookQuery, updateStatusBookQuery,
} from './book';
import checkEmailAdminExistsQuery from './admin';
import { postServiceQuery, archivedServiceQuery, putServiceQuery, getServicesQuery } from './services';

export {
  getCategoriesQuery,
  getCategoryServicesQuery,
  getContactsQuery,
  addContactQuery,
  deleteContactQuery,
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
  updateContactStatusQuery,
  getStatusQuery,
  deleteBookQuery,
  getBookDayQuery,
  getBookMonthQuery,
  getServicesQuery,
  updateBookQuery,
  updateStatusBookQuery,
  getEmailQuery,
};
