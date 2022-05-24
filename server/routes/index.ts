import { Router } from 'express';
import {
  getCategories,
  getCategoryServices,
  postCategories,
  getContacts,
  addContact,
  deleteContact,
  signup,
  logout,
  signin,
  getBooks,
  postService,
  putCategories,
  putService,
  archivedService,
  archivedCategory,
  getUserBooks,
  getBook,
  postBook,
  validateLink,
  signinAdmin,
  updateContactStatus,
  checkAdmin,
  checkAuth,
  logoutAdmin,
  getStatus,
  deleteBook,
  getBookDay,
  getBookMonth,
  getServices,
} from '../controllers';

const router = Router();
router.get('/categories', getCategories);
router.get('/services', getServices);
router.get('/categories/:id/services', validateLink, getCategoryServices);
router.delete('/services/:id', validateLink, archivedService);
router.delete('/categories/:id', validateLink, archivedCategory);
router.delete('/book/:id', validateLink, deleteBook);
router.route('/contact').get(getContacts).post(addContact);
router.delete('/contact/archives/:id', validateLink, deleteContact);
router.put('/contact/status/:id', validateLink, updateContactStatus);
router.post('/signup', signup);
router.get('/logout', logout);
router.get('/logoutAdmin', logoutAdmin);
router.post('/signin', signin);
router.post('/admin/signin', signinAdmin);
router.get('/book/status', getStatus);
router.get('/book/month', getBookMonth);
router.get('/book/day', getBookDay);
router.get('/book', getBooks);
router.get('/book/:id', validateLink, getBook);
router.get('/user/:id/book', validateLink, getUserBooks);
router.post('/book', checkAuth, postBook);
// router.use(checkAdmin);
router.post('/services', postService);
router.post('/categories', postCategories);
router.put('/services/:id', validateLink, putService);
router.put('/categories/:id', validateLink, putCategories);
export default router;
