import { Router } from 'express';
import { getCategories, getCategoryServices, getContacts, signup } from '../controllers';

const router = Router();
router.get('/categories', getCategories);
router.get('/categories/:id/services', getCategoryServices);
router.get('/contact', getContacts);
router.post('/signup', signup);
export default router;
