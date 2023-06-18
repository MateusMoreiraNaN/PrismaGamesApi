import { Request, Response } from "express";
import { prismaClient } from "../database/Prismaclient";

export class FindCategoryController{
    async Find(req: Request, res:Response){
        const { id } = req.params
        const { name } = req.body

        const category = await prismaClient.category.findFirst({
            where:{
                id,
                
            },
            include:{
                GameCategory: true
            }
        })

        return res.json(category)
    }
}