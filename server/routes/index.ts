import { Router } from 'express';
import {
  getCategories,
  getCategoryServices,
  postCategories,
  getContacts,
  addContact,
  signup,
  logout,
  signin,
  getBooks,
  postService,
  getUserBooks,
  getBook,
  validateLink,
  signinAdmin,
} from '../controllers';

const router = Router();
router.get('/categories', getCategories);
router.post('/categories', postCategories);
router.get('/categories/:id/services', validateLink, getCategoryServices);
router.get('/book', getBooks);
router.get('/book/:id', validateLink, getBook);
router.get('/user/:id/book', validateLink, getUserBooks);
router.post('/services', postService);
router.route('/contact').get(getContacts).post(addContact);
router.post('/signup', signup);
router.get('/logout', logout);
router.post('/signin', signin);
router.post('/admin/signin', signinAdmin);
export default router;
