import { Router } from "express";
import { CreateGamesController } from '../controller/GamesController'
import { CreateCategoryController } from '../controller/CategoryController'

const router = Router()

const createGamesController = new CreateGamesController()
const createCategoryController = new  CreateCategoryController()

router.post("/game", createGamesController.games)
router.post("/category", createCategoryController.category)

export { router }