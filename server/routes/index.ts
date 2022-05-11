import { Router } from 'express';
import {
  getCategories, getCategoryServices, getContacts, addContact, signup, logout, signin, checkAuth,
} from '../controllers';

const router = Router();
router.get('/categories', getCategories);
router.get('/categories/:id/services', getCategoryServices);
router.route('/contact').get(getContacts).post(addContact);
router.post('/signup', signup);
router.get('/logout', logout);
router.post('/signin', signin);
router.get('/check', checkAuth);
export default router;
