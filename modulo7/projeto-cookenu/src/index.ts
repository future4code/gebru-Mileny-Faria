import { app } from './controller/app'
import { userRouter } from './controller/UserRouter'


app.use('/user/', userRouter)
