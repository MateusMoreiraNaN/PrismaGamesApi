import { Router } from "express";
import { CreateGamesController } from '../controller/GamesController'
import { CreateCategoryController } from '../controller/CategoryController'
import { ListGamesController } from '../controller/ListGamesController'
import { GamesCategoryController } from '../controller/GamesCategoryController'
import { GameWithExisteCategory } from '../controller/GameWithExisteCategoryController'
import { FindGameController } from '../controller/FindGameController'
import { FindCategoryController } from '../controller/FindCategoryController'


const router = Router()

const createGamesController = new CreateGamesController()
const createCategoryController = new  CreateCategoryController()
const listGamesController = new ListGamesController()
const gamesCategoryController = new GamesCategoryController()
const gameWithExisteCategory = new GameWithExisteCategory()
const findGameController = new FindGameController()
const findCategoryController = new FindCategoryController()

router.get("/games", listGamesController.games)
router.get("/category", listGamesController.category)
router.get("/references", listGamesController.references)
router.post("/game", createGamesController.games)
router.post("/category", createCategoryController.category)
router.post("/gamesCategory", gamesCategoryController.GP)
router.post("/gameWithCategoty", gameWithExisteCategory.Exist)
router.get("/findGame/:id", findGameController.Find)
router.get("/findCategory/:id", findCategoryController.Find)

export { router }