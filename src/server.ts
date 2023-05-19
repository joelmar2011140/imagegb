import { createServer } from 'http'
import app from './app'

function startServer (): void {
  const servidor = createServer(app)
  const porta = 3232
  servidor.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
  })
}

startServer()
