import { app } from './app'
import { UserRouter } from './routes/UserRouter'

app.use('/user', UserRouter)

