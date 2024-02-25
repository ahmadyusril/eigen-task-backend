import * as express from 'express';
import MemberRouter from './MemberRoutes';
import BookRouter from './BookRoutes';

const router = express.Router();

router.use('/', MemberRouter);
router.use('/', BookRouter);

export default router
