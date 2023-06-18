import { Request, Response } from "express";
import { prismaClient } from "../database/Prismaclient";

export class GameWithExisteCategory{
    async Exist(req: Request, res: Response){
        const { name, price, bar_code, id_category } = req.body

        if(!bar_code){
            res.sendStatus(400)
        }else{
            const game = await prismaClient.gameCategory.create({
                data:{
                    game:{
                        create:{
                            bar_code,
                            name,
                            price
                        }
                    },
                    category:{
                        connect:{
                            id: id_category
                        }
                    }
                }
            })
    
            res.json(game)
        }
    }
}
 