import { Request, Response } from 'express';
import MemberService from '../services/MemberService';

export default new class MemberController {
    getMembers(req: Request, res: Response) {
        MemberService.getMembers(req, res);
    }

    createMember(req: Request, res: Response) {
        MemberService.createMember(req, res);
    }
}