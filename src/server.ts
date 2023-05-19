import { createServer } from 'http'
import dotenv from 'dotenv'
import app from './app'

dotenv.config()

function startServer (): void {
  const servidor = createServer(app)
  const porta = 3232
  servidor.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
  })
}

startServer()
