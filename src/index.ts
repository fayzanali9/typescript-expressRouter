import {Router} from 'express'
import usersRouter from './routes/user.routes'

const routes = Router();
routes.use('/users',usersRouter);


export default routes;
