import { Router } from 'express';
import {
  getCategories, getCategoryServices, getContacts, addContact,
} from '../controllers';

const router = Router();
router.get('/categories', getCategories);
router.get('/categories/:id/services', getCategoryServices);
router.get('/contact', getContacts);
router.post('/contact', addContact);
export default router;
