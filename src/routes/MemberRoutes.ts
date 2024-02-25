import { Router } from 'express';
import MemberController from '../controllers/MemberController';

const MemberRouter = Router();

MemberRouter.post("/member", MemberController.createMember);
MemberRouter.get("/members", MemberController.getMembers);

export default MemberRouter;