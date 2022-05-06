import { Router } from 'express';
import { getCategories, getCategoryServices, getContacts } from '../controllers';

const router = Router();
router.get('/categories', getCategories);
router.get('/categories/:id/services', getCategoryServices);
router.get('contact', getContacts);
export default router;
