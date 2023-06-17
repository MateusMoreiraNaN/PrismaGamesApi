import express, { Request, Response } from 'express'
import { router } from './routes/routes'

const server = express()

server.use(express.json())
server.use(router)

server.listen(process.env.PORT)




