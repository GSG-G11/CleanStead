import router from 'express';

import { getCategories } from '../controllers';

const apiRouter = router.Router();

apiRouter.get('/categories', getCategories);

export default apiRouter;
