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
  putCategories,
  putService,
  deleteService,
  getUserBooks,
  getBook,
  postBook,
  validateLink,
  signinAdmin,
  checkAdmin,
  checkAuth,
} from '../controllers';

const router = Router();
router.get('/categories', getCategories);
router.get('/categories/:id/services', validateLink, getCategoryServices);
router.get('/book', getBooks);
router.get('/book/:id', validateLink, getBook);
router.get('/user/:id/book', validateLink, getUserBooks);
router.route('/contact').get(getContacts).post(addContact);
router.post('/signup', signup);
router.get('/logout', logout);
router.post('/signin', signin);
router.post('/admin/signin', signinAdmin);
router.post('/book', checkAuth, postBook);
// router.use(checkAdmin);
router.post('/services', postService);
router.post('/categories', postCategories);
router.put('/services/:id', validateLink, putService);
router.delete('/services/:id', validateLink, deleteService);
router.put('/categories/:id', validateLink, putCategories);
export default router;
