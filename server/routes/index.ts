import { Router } from 'express';
import { getCategories, getCategoryServices } from '../controllers';

const router = Router();
router.get('/categories', getCategories);
router.get('/categories/:id/services', getCategoryServices);
export default router;
