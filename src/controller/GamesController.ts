import { Request, Response } from "express";
import { prismaClient } from "../database/Prismaclient";

export class CreateGamesController {
    async games(req: Request, res: Response){
        const { name, bar_code, price } = req.body

        if(!bar_code){
            const game = await prismaClient.game.create({
                data:{
                    bar_code,
                    name,
                    price
                }
            })
            return res.json(game)
        }else{
            res.sendStatus(400)
            
            
        }

        
    }

}