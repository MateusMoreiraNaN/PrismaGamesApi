import { Router } from "express";
import { CreateGamesController } from '../controller/GamesController'
import { CreateCategoryController } from '../controller/CategoryController'
import { ListGamesController } from '../controller/ListGamesController'

const router = Router()

const createGamesController = new CreateGamesController()
const createCategoryController = new  CreateCategoryController()
const listGamesController = new ListGamesController()

router.get("/games", listGamesController.games)
router.get("/category", listGamesController.category)
router.post("/game", createGamesController.games)
router.post("/category", createCategoryController.category)

export { router }