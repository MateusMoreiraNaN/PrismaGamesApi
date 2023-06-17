import { Request, Response } from "express";
import { prismaClient } from "../database/Prismaclient";

export class GamesCategoryController{
    async GP(req: Request, res: Response){
        const { id_game, id_category } = req.body 

        const gamesCategory = await prismaClient.gameCategory.create({
            data:{
                id_category,
                id_game
            }
        })

        return res.json(gamesCategory)
    }

    
}