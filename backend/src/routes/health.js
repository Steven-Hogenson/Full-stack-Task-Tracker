import { Router } from 'express'
import { prisma } from '../db/prisma.js'
const router = Router()
router.get('/', async (req, res) => {
  try {
    // quick DB ping; if Postgres is down or DATABASE_URL missing, this will throw
    await prisma.$queryRaw`SELECT 1`
    res.json({ status: 'ok', db: 'ok' })
  } catch (err) {
    res.status(500).json({
      status: 'degraded',
      db: 'error',
      message: err instanceof Error ? err.message : 'Unknown error'
    })
  }
})
export default router
