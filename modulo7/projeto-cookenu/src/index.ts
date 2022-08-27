import { app } from './controller/app'
import { recipeRouter } from './controller/RecipeRouter'
import { userRouter } from './controller/UserRouter'


app.use('/user/', userRouter)
app.use('/recipe/', recipeRouter)
