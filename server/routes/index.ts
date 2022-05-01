import { Router } from 'express';
import { getCategories } from '../controllers';

const router = Router();
router.get('/categories', getCategories);
export default router;
