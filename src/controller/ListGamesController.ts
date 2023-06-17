import { Request, Response } from "express";
import { prismaClient } from "../database/Prismaclient";

export class ListGamesController {
    async games(req: Request, res: Response){
        

        const games2 = await prismaClient.game.findMany()

        return res.json(games2)
    }

    async category(req: Request, res: Response){
        const category = await prismaClient.category.findMany()

        return res.json(category)
    }

}