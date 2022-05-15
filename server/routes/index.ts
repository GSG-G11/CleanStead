import { Router } from 'express';
import {
  getCategories,
  getCategoryServices,
  getContacts,
  addContact,
  signup,
  logout,
  signin,
  getBooks,
  postService,
  putService,
  getUserBooks,
  getBook,
  validateLink,
} from '../controllers';

const router = Router();
router.get('/categories', getCategories);
router.get('/categories/:id/services', validateLink, getCategoryServices);
router.get('/book', getBooks);
router.get('/book/:id', validateLink, getBook);
router.get('/user/:id/book', validateLink, getUserBooks);
router.post('/services', postService);
router.put('/services/:id', validateLink, putService);
router.route('/contact').get(getContacts).post(addContact);
router.post('/signup', signup);
router.get('/logout', logout);
router.post('/signin', signin);
export default router;
