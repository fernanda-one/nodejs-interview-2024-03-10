import express from 'express'
import { publicRouter } from '../routes/public-api.js'
import { errorMiddleware } from '../middleware/error-middleware.js'
import { privateRouter } from '../routes/private-api.js'

export const server = express()
server.use(express.json())
server.use(publicRouter)
server.use(privateRouter)
server.use(errorMiddleware)