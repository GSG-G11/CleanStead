import { Router } from 'express';
import {
  getCategories, getCategoryServices, getContacts, addContact, signup, signin, getBooks,
} from '../controllers';

const router = Router();
router.get('/categories', getCategories);
router.get('/categories/:id/services', getCategoryServices);
router.get('/book', getBooks);
router.route('/contact').get(getContacts).post(addContact);
router.post('/signup', signup);
router.post('/signin', signin);
export default router;
