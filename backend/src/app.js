import cors from 'cors'
import express from 'express'
import healthRouter from './routes/health.js'

export function createApp() {
  const app = express()

  app.use(cors())
  app.use(express.json())

  app.get('/', (req, res) => {
    res.json({ name: 'fullstack-task-tracker-api', status: 'ok' })
  })

  app.use('/health', healthRouter)

  return app
}
