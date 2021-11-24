import express from 'express'
import { router } from './routes'
import log from './utils/logger'

const app = express()

app.use(express.json())
app.use(router)

app.listen(5000, () =>
  log.info(`🚀 Server ready at: http://localhost:5000 ⭐️`),
)
