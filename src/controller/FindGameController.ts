import { Request, Response } from "express";
import { prismaClient } from "../database/Prismaclient";

export class FindGameController{
    async Find(req: Request, res: Response){
        const { id } = req.params

        const game = await prismaClient.game.findFirst({
            where:{
                id
            },
            include:{
                GameCategory: true
            }
        })

        return res.json(game)
    }
}