import type { Application } from 'express'
import express from 'express'
import { appRoutes } from './app.routes'

const app: Application = express()

app.use('/api', appRoutes)

export default app
