import { Router } from 'express'
import { removeBackgroundHttp } from './app.controller'

export const appRoutes = Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
appRoutes.post('/remove', removeBackgroundHttp)
