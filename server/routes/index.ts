import { Router } from 'express';
import {
  getCategories, getCategoryServices, getContacts, addContact,
} from '../controllers';

const router = Router();
router.get('/categories', getCategories);
router.get('/categories/:id/services', getCategoryServices);
router.route('/contact').get(getContacts).post(addContact);
export default router;
