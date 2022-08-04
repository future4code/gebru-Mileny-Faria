import { app } from './app'
import { MovieRouter } from './routes/MovieRouter'
import { UserRouter } from './routes/UserRouter'

app.use('/user', UserRouter)
app.use('/movie', MovieRouter)

