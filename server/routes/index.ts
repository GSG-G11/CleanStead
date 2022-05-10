import { Router } from 'express';
import {
  getCategories, getCategoryServices, getContacts, addContact, signup, signin
} from '../controllers';

const router = Router();
router.get('/categories', getCategories);
router.get('/categories/:id/services', getCategoryServices);
router.route('/contact').get(getContacts).post(addContact);
router.post('/signup', signup);
router.post('/signin', signin);
export default router;
