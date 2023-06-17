import { Request, Response } from "express";
import { prismaClient } from "../database/Prismaclient";

export class CreateCategoryController{
    async category(req: Request, res: Response){
        const { name } = req.body

        const category = await prismaClient.category.create({
            data:{
                name
            }
        })

        return res.json(category)
    }
}