import { Router } from "express";
import { CreateGamesController } from '../controller/GamesController'
import { CreateCategoryController } from '../controller/CategoryController'
import { ListGamesController } from '../controller/ListGamesController'
import { GamesCategoryController } from '../controller/GamesCategoryController'

const router = Router()

const createGamesController = new CreateGamesController()
const createCategoryController = new  CreateCategoryController()
const listGamesController = new ListGamesController()
const gamesCategoryController = new GamesCategoryController

router.get("/games", listGamesController.games)
router.get("/category", listGamesController.category)
router.get("/references", listGamesController.references)
router.post("/game", createGamesController.games)
router.post("/category", createCategoryController.category)
router.post("/gamesCategory", gamesCategoryController.GP)

export { router }