import { Router } from 'express';
import { getCategories, getCategoryServices } from '../controllers';

const router = Router();
router.get('/categories', getCategories);
router.get('/category/:id/services', getCategoryServices);
export default router;
