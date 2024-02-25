import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Member } from "../entities/Member";
import { Request, Response } from "express";

export default new class MemberService {
    private readonly MemberRepository: Repository<Member> =
        AppDataSource.getRepository(Member);

    async getMembers(req: Request, res: Response): Promise<Response> {
        try {
            const member = await this.MemberRepository.find();

            return res.status(201).json({
                status: "success",
                message: "Find members successfully",
                data: member
            })

        } catch (error) {
            return res.status(500).json({
                status: "fail",
                message: error
            })
        }

    }

    async createMember(req: Request, res: Response): Promise<Response> {
        try {
            const { code, name } = req.body;
            const member = new Member();

            member.code = code;
            member.name = name;

            await this.MemberRepository.save(member)

            return res.status(201).json({
                status: "Success",
                message: "Create member successfully",
            })

        } catch (error) {
            return res.status(500).json({
                status: "fail",
                message: error
            })
        }
    }
}