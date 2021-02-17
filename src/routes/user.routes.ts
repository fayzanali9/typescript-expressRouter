import {response, Router} from 'express';
import { request } from 'http';
const usersRouter = Router();
usersRouter.get('/',(req,res) =>{
    return res.json("ok");
})

export default usersRouter;
