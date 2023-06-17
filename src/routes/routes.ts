import { Router } from "express";
import { CreateGamesController } from '../controller/GamesController'

const router = Router()

const createGamesController = new CreateGamesController()

router.post("/game", createGamesController.games)

export { router }